import $ from 'jquery';

function ContactController () {

  $('.email').hover(
         function(){ $(this).removeClass('hidden') })

};

export { ContactController };
