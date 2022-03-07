import * as React from 'react';
import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';
import {Card} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import useAuth from '../util/AuthContext';
import '../stylesheets/OpportunityDetails.css';


/**
 * OpportunityPage component
 * @return {html} Opportunity Details page
 */
export default function OpportunityDetails({data}) {
  console.log(data);
  const [opportunityCreator, setOpportunityCreator] = useState(null);
  const {userProfile} = useAuth();

  const getOpportunityCreator = () => {
    fetch(`/api/getProfileName/${data.usersponsors.creator}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setOpportunityCreator(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving opportunity creators profile');
        });
  };

  useEffect(() => {
    getOpportunityCreator();
  }, []);

  const formatDate = (date) => {
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const timeOptions = {
      hour: 'numeric',
      minute: '2-digit',
    };

    const convertDate = new Date(date).toLocaleDateString([], dateOptions);
    const convertTime = new Date(date).toLocaleTimeString([], timeOptions);

    return {date: convertDate, time: convertTime};
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} xl={12}
          sx={{display: 'flex',
            justifyContent: 'center'}}>
          <Paper
            className='opportunity-details-page'
            elevation={3}
            sx={{
              display: 'flex',
              marginBottom: '3rem',
              flexDirection: 'column',
              marginTop: '3rem',
              width: '60vw',
              height: '900px',
              boxShadow: '0px 0px 50px -14px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
            }}
          >
            <div className='opportunity-header'>
              <h1 className='opportunity-name'>{data.eventname}</h1>
              <h3 className='opportunity-need-volunteers'>
                Need volunteers?
                <Link to='/browse'>
                  <Button
                    sx={{
                      display: 'flex',
                      position: 'relative',
                      width: '100px',
                      top: '10px',
                      marginLeft: '30px',
                      height: '50px',
                      backgroundColor: '#fdc700',
                    }}>
                    Browse
                  </Button>
                </Link>
              </h3>
            </div>
            <div>
              {opportunityCreator !== null &&
                  <div className='opportunity-host'>
                    <div className='opportunity-creator-avatar'>
                      <Avatar
                        src={opportunityCreator.profilepicture}
                        sx={{
                          width: '45px',
                          height: '45px',
                        }}
                      />
                    </div>
                    <div className='opportunity-creator'>
                      {
                        data.organization &&
                        data.organization != 'user sponsor' ?
                        `Hosted by ${data.organization}` :
                        data.organization == 'user sponsor' ||
                        data.organization == null &&
                        opportunityCreator.profileid == userProfile.profileid ?
                        `Hosted by You` :
                        `Hosted by 
                        ${opportunityCreator.firstname} 
                        ${opportunityCreator.lastname[0]}.`
                      }
                    </div>
                  </div>
              }
            </div>
            <Card
              sx={{
                display: 'flex',
                minHeight: '310px',
                position: 'relative',
                top: '7%',
                marginLeft: '7.5%',
                marginBottom: '100px',
                width: '85%',
                boxShadow: '0',
                borderRadius: '10px',
                outline: '0.5px solid #d1d1d1',
              }}
            >
              <div className='opportunity-card-left'>
                <img
                  className='opportunity-card-left-cover'
                  src={data.eventbanner}
                />
              </div>
              <div className='opportunity-card-right'>
                <p>{data.description}</p>
              </div>
            </Card>
            <div className='opportunity-details-header'>Details:</div>
            <div className='opportunity-details'>
              <div>Opportunity Type:  {data.opportunitytype}</div>
              <div>Date:  {data.startdate &&
                formatDate(data.startdate).date}
              {data.enddate &&
                ` - ${formatDate(data.enddate).date}`}
              </div>
              <div>
                {data.remote && data.remote == 'true' ?
                `Remote Opportunity Link:  ` +
                data.eventzoomlink : data.remote &&
                data.remote == 'false' &&
                data.eventlocation &&
                data.eventlocation.address &&
                data.eventlocation.city &&
                data.eventlocation.state &&
                data.eventlocation.zip ?
                `Location:  ` +
                data.eventlocation.address +
                ' ' + data.eventlocation.city +
                ', ' + data.eventlocation.state + ' ' +
                data.eventlocation.zip :
                data.remote && data.remote == 'false' &&
                data.eventlocation && `Location:  ` +
                data.eventlocation.address}
              </div>
              <div>
                {data.starttime && `Time:  ` +
                formatDate(data.starttime).time}
              </div>
            </div>
            <h2>{data.roles}</h2>
          </Paper>
        </Grid>
      </Grid>
    </div>);
}
