package _Scripts {
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.system.Capabilities;
	import flash.text.TextField;
	import flash.display.MovieClip;
	import flash.events.StageOrientationEvent;
	import flash.ui.Keyboard;
	import flash.events.Event;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	//libraries for mouse events.
	import flash.events.MouseEvent;
	import flash.events.KeyboardEvent;
	import flash.events.TouchEvent;
	//libraries for multi touch events.
	import flash.ui.Multitouch;
	import flash.ui.MultitouchInputMode;
	//libraries for gesture events.
	import flash.events.GestureEvent;
	import flash.events.GesturePhase;
	import flash.events.TransformGestureEvent;
	import flash.media.SoundChannel;
	import flash.sensors.DeviceRotation;
	import flash.events.DeviceRotationEvent;
	import flash.text.ReturnKeyLabel;
	


	public class music extends MovieClip {
		private var background: MovieClip = new Background();
		private var sheet: MovieClip = new Sheet();
		private var startBtn: MovieClip = new StartBtn();
		private var title: MovieClip = new Title();
		private var mareep: MovieClip = new Mareep();
		private var tryAgain:MovieClip = new TryAgain();
		private var RETURN:MovieClip = new Return();
		private var metro: Metro = new Metro();
		private var mary: Mary = new Mary();
		private var deviceRotation = new DeviceRotation();
		private var metroChan: SoundChannel;
		private var maryChan: SoundChannel;
		private var count: Number = 0;
		private var alphaCount:Number = 0;
		private var isSupported: Boolean = DeviceRotation.isSupported;

		public function music() {
			// constructor code

			test.drkRoom.addChild(background);
			background.width = test.drkRoom.width;
			background.height = test.drkRoom.height;
			addChild(sheet);
			sheet.y = background.height * 0.50;
			addChild(title);
			title.x = background.width* 0.10;
			title.y = background.height* 0.25;
			addChild(startBtn);
			startBtn.x = background.width * 0.40;
			startBtn.y = background.height * 0.75;

			startBtn.addEventListener(TouchEvent.TOUCH_TAP, taparoo);
			checksupport();
			
		}
		
		public function begins():void {
			
			addChild(background);
			background.width = stage.stageWidth;
			background.height = stage.stage.stageHeight;
			addChild(sheet);
			sheet.y = background.height * 0.50;
			addChild(title);
			title.x = background.width* 0.10;
			title.y = background.height* 0.25;
			addChild(startBtn);
			startBtn.x = background.width * 0.40;
			startBtn.y = background.height * 0.75;

			startBtn.addEventListener(TouchEvent.TOUCH_TAP, taparoo);
			checksupport();
		}
		
		public function taparoo(event:TouchEvent):void {
			trace("hai");
			startBtn.alpha = 0;
			startBtn.removeEventListener(TouchEvent.TOUCH_TAP, taparoo);
			removeChild(startBtn);
			metroChan = metro.play();
			metroChan.addEventListener(Event.SOUND_COMPLETE, tempoComplete); 
		}

		public function tempoComplete(event: Event): void {
			trace("Hai");
			metroChan.removeEventListener(Event.SOUND_COMPLETE, tempoComplete); 
			maryChan = mary.play();
			maryChan.addEventListener(Event.SOUND_COMPLETE, maryComplete);
			sheet.gotoAndPlay(2);
		}
		
		public function maryComplete(event:Event):void {
			trace("hai");
			maryChan.removeEventListener(Event.SOUND_COMPLETE, maryComplete);
			endingHandler();
		}
		
		public function endingHandler():void {
			stage.addEventListener(Event.ENTER_FRAME, alphaHandler);
			
			addChild(tryAgain);
			tryAgain.TRY.alpha = 0;
			tryAgain.again.alpha = 0;
			tryAgain.x = sheet.width *0.20;
			tryAgain.y = sheet.y + 2*sheet.height;
			addChild(RETURN);
			RETURN.alpha = 0;
			RETURN.x = sheet.width *0.40;
			RETURN.y = sheet.y + 2*sheet.height;
			
			tryAgain.addEventListener(TouchEvent.TOUCH_TAP, restart);
			RETURN.addEventListener(TouchEvent.TOUCH_TAP, goBack);
			
		}

		public function rotationCheck(evt: DeviceRotationEvent): void {
			trace(evt.roll);
			trace(evt.yaw);
			trace(evt.pitch);
		}
		
		public function alphaHandler(evt:Event):void {
			alphaCount++
			tryAgain.TRY.alpha += 0.05
			RETURN.alpha += 0.05;
			
			if (alphaCount >= 15) {
				tryAgain.again.alpha += 0.05;
			}
			
			if (alphaCount == 30) {
				stage.removeEventListener(Event.ENTER_FRAME, alphaHandler);
			}
		}
		
		public function restart(evt:Event):void {
			trace("restart");
		}
		
		public function goBack(evt:Event):void {
			trace("back to desk");
		}
		
		public function checksupport(): void {
			if (isSupported) {
				trace("DeviceRotation supported");
				deviceRotation.addEventListener(DeviceRotationEvent.UPDATE, rotationCheck);
			} else {
				trace("DeviceRotation not supported");
			}
		}
	}

}