const SendGrid = require('@sendgrid/mail');
SendGrid.setApiKey('<sendgrid_api_key_here>');
const msg = {
    to: '<your_email_here>',
    subject: 'Test Transactional Template',
    from: '<from_email_here>',
    text: body,
    html: body,
    templateId: '<sendgrid_template_id_here>',
    substitutions: {
        '{ClientUrl}': 'http://localhost:4200'
    }
};
SendGrid.send(msg);