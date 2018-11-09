package Player.Plants {
	import flash.display.MovieClip;
	import flash.events.Event;
	import Player.Plants.plantStates.pumpkinBOI;
	import Player.Plants.plantStates.pumpkin1;
	import Player.Plants.plantStates.pumpkin2;

	
	public class pumpkinClass extends MovieClip {
		
		public static const pumpkinStage1:pumpkinBOI = new pumpkin1();
		public static const pumpkinStage2:pumpkinBOI = new pumpkin2();
		public var plantHealth:Number;
		private var _previousState:pumpkinBOI;
		public var _currentState:pumpkinBOI;


		public function pumpkinClass() {
			_currentState = pumpkinStage1;
			plantHealth = 0;
			this.addEventListener(Event.ENTER_FRAME, loop);
			_currentState.enter(this);
		}
		private function loop(evt:Event):void {
			if(!_currentState) return;
			_currentState.update(this);
		}
		public function setState(newState:pumpkinBOI):void {
			if (_currentState == newState) return;
			if (_currentState) {
				_currentState.exit(this);
			}
			_previousState = _currentState;
			_currentState = newState;
			_currentState.enter(this);
		}
		public function get previousState():pumpkinBOI { return _previousState; }
		
		public function get currentState():pumpkinBOI { return _currentState; }
	}
}
