import paypal from 'paypal-rest-sdk';

paypal.configure({
    "mode": 'sandbox',
    "client_id": 'AYVNbi1hTeWzzz7vXv2P39G8rEt0cPRdIjhLjjk5uodpYUMdfUmlM-cOQXaBg2sTH8XX4YoVhKI3jFya',
    "client_secret": 'EO0R5IeDVzLBZ_6yQufcRdW5Lt82EPBrR2yfAioHDY3RQDeWyd8qMuxvJeVZzxuid3CRm4nkQFec9VNw',
});

export default paypal