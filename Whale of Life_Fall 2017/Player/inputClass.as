package Player {
	import flash.events.KeyboardEvent;
	import flash.display.Stage;
	import flash.events.Event;
	import flash.display.MovieClip;
	import flash.display.DisplayObjectContainer;
	
	public class inputClass {
		public var aDown:Number = 0;
		public var dDown:Number = 0;
		public var wDown:Number = 0;
		public var sDown:Number = 0;
		public var placePumpkin:Boolean = false;
		public var placePlant:Boolean = false;
		public var uppress:Boolean = false;
		public var downpress:Boolean = false;
		public var rightpress:Boolean = false;
		public var leftpress:Boolean = false;
		public var shoot:Boolean = false;
		public var placeFlower:Boolean = false;
		public function inputClass(stage:DisplayObjectContainer) {
			stage.addEventListener(KeyboardEvent.KEY_DOWN, keysDown);
			stage.addEventListener(KeyboardEvent.KEY_UP, keysUp);
		}
		private function keysDown(evt:KeyboardEvent):void {
			if(evt.keyCode == 51) {
				placePumpkin = true;
			}
			if(evt.keyCode == 50) {
				placeFlower = true;
			}
			if(evt.keyCode == 49) {
				placePlant = true;
			}
			if(evt.keyCode == 65) {
				aDown = 1;
			}
			if(evt.keyCode == 68) {
				dDown = 1;
			}
			if(evt.keyCode == 87) {
				wDown = 1;
			}
			if(evt.keyCode == 83) {
				sDown = 1;
			}
			if(evt.keyCode == 37) {
				leftpress = true;
			}
			if(evt.keyCode == 39) {
				rightpress = true;
			}
			if(evt.keyCode == 40) {
				downpress = true;
			}
			if(evt.keyCode == 12) {
				downpress = true;
			}
			if(evt.keyCode == 38) {
				uppress = true;
			}
			if(evt.keyCode == 32) {
				shoot = true;
			}
			if(evt.keyCode == 100) {
				leftpress = true;
			}
			if(evt.keyCode == 102) {
				rightpress = true;
			}
			if(evt.keyCode == 101) {
				downpress = true;
			}
			if(evt.keyCode == 104) {
				uppress = true;
			}
		}
		private function keysUp(evt:KeyboardEvent):void {
			if(evt.keyCode == 51) {
				placePumpkin = false;
			}
			if(evt.keyCode == 50) {
				placeFlower = false;
			}
			if(evt.keyCode == 49) {
				placePlant = false;
			}
			if(evt.keyCode == 65) {
				aDown = 0;
			}
			if(evt.keyCode == 68) {
				dDown = 0;
			}
			if(evt.keyCode == 87) {
				wDown = 0;
			}
			if(evt.keyCode == 83) {
				sDown = 0;
			}
			if(evt.keyCode == 37) {
				leftpress = false;
			}
			if(evt.keyCode == 39) {
				rightpress = false;
			}
			if(evt.keyCode == 40) {
				downpress = false;
			}
			if(evt.keyCode == 12) {
				downpress = false;
			}
			if(evt.keyCode == 38) {
				uppress = false;
			}
			if(evt.keyCode == 100) {
				leftpress = false;
			}
			if(evt.keyCode == 102) {
				rightpress = false;
			}
			if(evt.keyCode == 101) {
				downpress = false;
			}
			if(evt.keyCode == 104) {
				uppress = false;
			}
			if(evt.keyCode == 32) {
				shoot = false;
			}
		}
	}
}
