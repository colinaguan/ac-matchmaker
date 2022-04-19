import emailjs, {init} from '@emailjs/browser';
init('5A9OSqglcYcpKAMgd');

export const VerifyEmail = (user) => {
  const url = window.location.href;
  const route = url+`/verify/${user.token}`;
  console.log(route);

  const templateParams = {
    to_email: user.useremail,
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

