'use strict';
const Homey = require('homey');

class MyApp extends Homey.App 
{
	onInit() 
	{
		this.log('AutoRemoteMessage is running...');
	}
		
}
function postmsg(msg, autoremotekey, pass)
{
	var https = require('https')
	if(pass=="-")
	{
		https.get("https://autoremotejoaomgcd.appspot.com/sendmessage?key="+autoremotekey+"&message="+msg, function(result)
		{// do stuff with the result (not used)
		});
		return true;
	}
	else
	{
		https.get("https://autoremotejoaomgcd.appspot.com/sendmessage?key="+autoremotekey+"&message="+msg+"&password="+pass, function(result)
		{// do stuff with the result (not used)
		});
		return true;
	}
}
let action = new Homey.FlowCardAction('send_message');

action.register().registerRunListener(( args, state ) => {
	var msg = args.msg;
	var autoremotekey = args.autoremotekey;
	var pass = args.password;
	postmsg(msg,autoremotekey,pass); // Call function
	return true;
});

module.exports = MyApp;

