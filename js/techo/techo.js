'use strict';
	var me = this;
	var currency = 'PEN';
	var amount = 0;
	var customamount = 0;
		var template =  document.createElement('div');
		template.id='donation-techo-box';
		template.innerHTML = '<div class="donation-techo-hidden">' +
        '<a class="donation-techo-close-widget" id="donation-techo-close-widget">&times;</a>'+
        '<div class="donation-techo" id="container" style=""><div class="donation-techo-block">' +
        '<img class="donation-techo-image" src="https://s3-us-west-2.amazonaws.com/joinnus.com/events/Widget+-+Donacion+TECHO-03.png">'+
        '</div><span class="donation-techo-block donation-techo-message">DONA AQUÍ</span><img class="powered_joinnus" src="https://www.joinnus.com/inc/donation/images/powered.png" alt="">'+
        '</div></div>';
		document.body.appendChild(template);


    var closewidget     = document.getElementById('donation-techo-close-widget');
 	var currencyclass	= document.getElementsByClassName('donate-currency');
 	var amountclass 	= document.getElementsByClassName('donate-amount');

    var container = document.getElementById('container');

    container.onclick = function() {
        window.open("https://www.joinnus.com/donacion/techo");
    }

    closewidget.onclick = function() {
        document.getElementById('donation-techo-box').remove();
    }
