package Player.UI {
	import flash.display.MovieClip;
	import Player.UI.UIStates.UI1;
	import Player.UI.UIStates.UIInterface;
	
	public class UI extends MovieClip {
		public static const state1:UIInterface = new UI1();
		private var _previousState:UIInterface;
		private var _currentState:UIInterface;

		public function UI() {
			_currentState = state1;
			this.addEventListener(Event.ENTER_FRAME, loop);
			_currentState.enter(this);
		}
		private function loop(evt:Event):void {
			if(!_currentState) return;
			_currentState.update(this);
		}
		public function setState(newState:UIInterface):void {
			if (_currentState == newState) return;
			if (_currentState) {
				_currentState.exit(this);
			}
			_previousState = _currentState;
			_currentState = newState;
			_currentState.enter(this);
		}
		public function get previousState():UIInterface { return _previousState; }
		
		public function get currentState():UIInterface { return _currentState; }

	}
	
}
