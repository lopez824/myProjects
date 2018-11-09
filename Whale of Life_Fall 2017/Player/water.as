package Player {
	import flash.display.MovieClip;
	import flash.events.Event;
	
	public class water extends MovieClip {

		public function water() {
			this.addEventListener(Event.ENTER_FRAME, update);
		}
		private function update(evt:Event):void {
			if(this.parent!=null&&this.currentFrame >= 16) {
				parent.removeChild(this);
				this.removeEventListener(Event.ENTER_FRAME, update);
			}
		}

	}
	
}
