import emailjs, {init} from '@emailjs/browser';
init('5A9OSqglcYcpKAMgd');

export const VerifyEmail = (toEmail) => {
  const templateParams = {
    to_email: toEmail,
    message: '',
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
