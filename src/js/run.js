import $ from 'jquery';
function run ($rootScope){

		$rootScope.projects = allProjects;

		$('#hamburger').click(function(){
			$(this).toggleClass('active');
			$('nav ul').toggleClass('active');
			$('ul.active').children().click(function(){
				$('.active').removeClass('active');
			});
		});

		$(window).on("hashchange", function () {
			if(window.scrollY > 0){
				window.setTimeout(function(){
					window.scrollTo(window.scrollX, window.scrollY - 80)
				}, 20);
			};
		});
}

run.$inject = ['$rootScope'];
export { run };
