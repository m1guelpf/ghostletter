const mailerlite = require('./mailerlite');

const subscribeEvent = req => {
    return req.body.event == 'subscriber.added'
}

const unsubscribeEvent = req => {
    return req.body.event == 'subscriber.deleted'
}

const getEmail = req => {
    return req.body.subscribers[0].email
}

const handleWebhook = async req => {
    if (subscribeEvent(req)) {
        await mailerlite.subscribeUser(getEmail(req))
    }
    
    if (unsubscribeEvent(req)) {
        await mailerlite.unsubscribeUser(getEmail(req))
    }
}

module.exports = {handleWebhook}