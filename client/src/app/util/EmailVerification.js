import emailjs, {init} from '@emailjs/browser';
init('5A9OSqglcYcpKAMgd');

export const VerifyEmail = (user) => {
  let route;
  if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
    route = `http://tassel.com/verify/${user.token}`;
  } else {
    route = `http://localhost:3000/verify/${user.token}`;
  }

  const templateParams = {
    to_email: user.useremail,
    // to-do: Make message link dynamic so that we
    // dont have to switch for production or developement
    message: route,
  };

  if (templateParams.to_email != null) {
    console.log('templateParams:', templateParams);
    emailjs.send('service_2ncxfor', 'template_np5ucmd', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          return ('Success');
        }, function(error) {
          console.log('FAILED...', error);
          return ('Failed');
        });
  }
};

