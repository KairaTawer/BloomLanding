var app = angular.module("myApp",['ngRoute','ngAnimate'])
	.controller("myCtrl",function($scope) {

		$scope.secondList = [];
		$scope.tertiaryList = [];
		$scope.firstSelected = false;
		$scope.secondSelected = false;
		
		$scope.mainServices = [
							
							{name: 'Уход за ногтями',image: 'Bloom/64/nails.png'},
						    {name: 'Уход за волосами',image: 'Bloom/64/hairCut.png'},
						    {name: 'Макияж',image: 'Bloom/64/makeUp.png'},
						    {name: 'Уход за телом',image: 'Bloom/64/bodyCare.png'}
						   
						   ];

		$scope.secondaryServicesList = [
								
								[{name: 'Маникюр', type: ['Обрезной','Без покрытия','С покрытием']},
								 {name: 'Педикюр', type: ['Обрезной','Без покрытия']},
								 {name: 'Наращивание', type: ['Гелевое','Акриловое']}],
							
								[{name: 'Стрижки', type: ['Короткие','Налысо','Андеркат']},
								 {name: 'Мелирование', type: ['Шатуш','Омбре']},
								 {name: 'Покраска', type: ['Колорирование','Мажимеш','Пиксельное']}],
							
								[{name: 'Наращивание', type: ['Норковое','Шелковое','Из соболя']},
								 {name: 'Корректировка', type: ['Нитью','Восковая','Классическая']}],
							
								[{name: 'СПА-сауны', type: ['VIP','Джакузи']},
								 {name: 'Массаж', type: ['Гигиенический','Лечебный','Спортивный','Косметический']}]
							
							];
		
		$scope.itemClicked = function(index) {
			$scope.selectedService1 = $scope.mainServices[index];
			$scope.selectedService2 = "Выберите услугу";
			$scope.selectedService3 = "Выберите услугу";
			$scope.tertiaryList = [];
			$scope.secondList = $scope.secondaryServicesList[index];
			$scope.secondSelected = false;
			$scope.firstSelected = true;
		}
		$scope.itemClicked2 = function(item) {
			$scope.selectedService2 = item.name;
			$scope.selectedService3 = "Выберите услугу";
			$scope.tertiaryList = item.type;
			$scope.secondSelected = true;
			console.log($scope.secondSelected);
		}
		$scope.itemClicked3 = function(item) {
			$scope.selectedService3 = item;
			console.log(item);
		}
		$scope.sendRequest = function() {
			
			console.log('test');
		}
	});

	
$(document).ready(function() {
	$('#pagepiling').pagepiling({
		verticalCentered: false,
		navigation: false,
	});
});
