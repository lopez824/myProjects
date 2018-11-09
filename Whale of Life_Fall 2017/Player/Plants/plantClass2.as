package Player.Plants {
	import flash.display.MovieClip;
	import flash.display.Stage;
	import flash.events.Event;
	import Player.Plants.plantStates.flowerBOI;
	import Player.Plants.plantStates.flowerStage1;
	import Player.Plants.plantStates.flowerStage2;
	import Player.waterItem;

	public class plantClass2 extends MovieClip {
		public static const fStage1:flowerBOI = new flowerStage1();
		public static const fStage2:flowerBOI = new flowerStage2();
		public var plantHealth:Number;
		private var _previousState:flowerBOI;
		public var _currentState:flowerBOI;
		public var waterTimer:Number;
		public var waterItemArray:Array;

		public function plantClass2() {
			_currentState = fStage1;
			waterItemArray = new Array;
			waterTimer = 0;
			plantHealth = 0;
			this.addEventListener(Event.ENTER_FRAME, loop);
			_currentState.enter(this);
		}
		public function makeWaterItem():void {
			var waterPickup:waterItem = new waterpickup();
			waterItemArray.push(waterPickup);
			main.background.addChild(waterPickup);
			waterPickup.x = this.x - 15;
			waterPickup.y = this.y + 10;
		}
		private function loop(evt:Event):void {
			if(!_currentState) return;
			_currentState.update(this);
		}
		public function setState(newState:flowerBOI):void {
			if (_currentState == newState) return;
			if (_currentState) {
				_currentState.exit(this);
			}
			_previousState = _currentState;
			_currentState = newState;
			_currentState.enter(this);
		}
		public function get previousState():flowerBOI { return _previousState; }
		
		public function get currentState():flowerBOI { return _currentState; }
	}
}
