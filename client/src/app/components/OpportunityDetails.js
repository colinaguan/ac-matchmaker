import * as React from 'react';
import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';
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
    fetch(`/api/getProfileName/${data[0].usersponsors.creator}`)
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
      hour: '2-digit',
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
              <h1 className='opportunity-name'>{data[0].eventname}</h1>
              <h3 className='opportunity-need-volunteers'>
                Need volunteers?
                <Link to='/browse'>
                  <Button
                    sx={{
                      display: 'flex',
                      position: 'relative',
                      width: '150px',
                      top: '20px',
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
                        data[0].organization &&
                        data[0].organization != 'user sponsor' ?
                        `Hosted by ${data[0].organization}` :
                        data[0].organization == 'user sponsor' ||
                        data[0].organization == null &&
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

            <h2>{data[0].opportunitytype}</h2>
            <h2>{data[0].description}</h2>
            <h2>{data[0].startdate &&
              formatDate(data[0].startdate).date}
            </h2>
            <h2>{data[0].enddate &&
              ` - ${formatDate(data[0].enddate).date}`}
            </h2>
            <h2>{data[0].remote && data[0].remote == 'true' ?
                    data[0].eventzoomlink : data[0].remote &&
                    data[0].remote == 'false' &&
                    data[0].eventlocation &&
                    data[0].eventlocation.address &&
                    data[0].eventlocation.city &&
                    data[0].eventlocation.state &&
                    data[0].eventlocation.zip ?
                    data[0].eventlocation.address +
                    ' ' + data[0].eventlocation.city +
                    ', ' + data[0].eventlocation.state + ' ' +
                    data[0].eventlocation.zip :
                    data[0].remote && data[0].remote == 'false' &&
                    data[0].eventlocation && data[0].eventlocation.address}
            </h2>
            <h2>{data[0].remote}</h2>
            <h2>{data[0].roles}</h2>
          </Paper>
        </Grid>
      </Grid>
    </div>);
}
