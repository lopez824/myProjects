package {
	// FAKECERT PASSWORD 1234JJJJ
	// display imports
	import flash.display.MovieClip;
	import flash.display.SimpleButton;
	import flash.display.Stage;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.display.StageOrientation;
	// text import
	import flash.text.TextField;
	import flash.text.TextFormat;
	// ui imports
	import flash.ui.Multitouch;
	import flash.ui.MultitouchInputMode;
	// event imports
	import flash.events.TouchEvent;
	import flash.events.Event;
	import flash.events.StageOrientationEvent;
	import flash.events.GestureEvent;
	import flash.events.GesturePhase;
	import flash.events.TransformGestureEvent;
	// other imports
	import flash.system.Capabilities;
	import fl.motion.MotionEvent;
	import fl.transitions.Transition;
	import flash.media.Sound;
	import flash.media.SoundChannel;


	public class Main extends MovieClip {


		// control vars for Dark Room
		private var goRight: SimpleButton = new rightBtn;
		private var goLeft: SimpleButton = new leftBtn;
		private var goUp: SimpleButton = new upBtn;
		private var goDown: SimpleButton = new downBtn;
		private var moveLength: Number = 10;

		// player var for Dark Room
		private var background: MovieClip = new Background();
		private var testPlayer: MovieClip = new player;

		// dialogue vars for Dark Room
		private var dialogueBox: MovieClip = new Dialogue;
		private var disabledControls: Boolean = false;
		private var dialogueOpen: Boolean = false;
		private var mainTextBox: TextField = new TextField;
		private var textFormat: TextFormat = new TextFormat;

		// hit objects vars for Dark Room
		private var hitCounter: Number = 0;
		private var toeHit: MovieClip = new RoomObjects;
		private var lampHit: MovieClip = new RoomObjects;
		private var tableHit: MovieClip = new RoomObjects;
		private var lightHit: MovieClip = new RoomObjects;
		private var tvHit: MovieClip = new RoomObjects;
		private var toeBool: Boolean = false;
		private var lampBool: Boolean = false;
		private var tableBool: Boolean = false;
		private var lightBool: Boolean = false;
		private var tvBool: Boolean = false;
		private var disableToe: Boolean = false;
		private var disableLamp: Boolean = false;
		private var disableTable: Boolean = false;
		private var disableLight: Boolean = false;
		private var rightActive:Boolean = false;
		private var leftActive:Boolean = false;
		private var upActive:Boolean = false;
		private var downActive:Boolean = false;

		// Alex's TV 
		private var pageCounter: int = 1;
		private var speakerSeen: Boolean = true;
		private var leftSeen: Boolean = false;
		private var rightSeen: Boolean = false;
		
		private var speechWatched: Boolean= false;

		private var television: MovieClip = new tvLinkage;
		private var tvOff: SimpleButton = new offButton();
		private var tvOffActive: Boolean = false;
		private var disableTv: Boolean = true;

		private var transition: MovieClip;

		//Marie's Desk
		private var desk: MovieClip = new Desk();
		private var deskAlpha:Boolean;
		private var activateDesk:Boolean;
		private var catLoop:Boolean = false;
		private var catColor:Boolean = false;
		private var lampColor:Boolean = false;
		private var gameColor:Boolean = false;
		private var bookColor:Boolean = false;
		
		//Casey's Book
		private var blakePlayer:MovieClip = new Blake;
		private var book:MovieClip= new Book;
		private var pageNum:Number = 1;
		private var facing:String;
		
		//Lionel's Game
		private var sheet: MovieClip = new Sheet();
		private var startBtn: MovieClip = new StartBtn();
		private var title: MovieClip = new Title();
		private var mareep: MovieClip = new Mareep();
		//private var tryAgain:MovieClip = new TryAgain();
		private var RETURN:MovieClip = new Return();
		private var metro: Metro = new Metro();
		private var mary: Mary = new Mary();
		private var metroChan: SoundChannel;
		private var maryChan: SoundChannel;
		private var count: Number = 0;
		private var alphaCount:Number = 0;
		
		private var scoreText:MovieClip = new ScoreText();
		private var score:Number = 0;
		private var scoring:Boolean = false;

		public function Main() {
			//scene = new Scene();
			//addChild(scene);
			// stage setup
			Multitouch.inputMode = MultitouchInputMode.TOUCH_POINT;
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.SHOW_ALL;
			stage.autoOrients = true;
			// add hit objects for Dark Room
			stage.addChild(background);
			background.width = 1920;
			background.height = 1080;

			stage.addChild(toeHit);
			toeHit.x = stage.stageHeight / 2;
			toeHit.y = stage.stageHeight - toeHit.height / 2;

			stage.addChild(lampHit);
			lampHit.x = stage.stageHeight + lampHit.width * 2;
			lampHit.y = stage.stageHeight - lampHit.height / 2;

			stage.addChild(tableHit);
			tableHit.x = stage.stageHeight / 4;
			tableHit.y = stage.stageHeight / 8;

			stage.addChild(lightHit);
			lightHit.x = stage.stageHeight / 1.25;
			lightHit.y = lightHit.height / 4;

			// add player for Dark Room
			stage.addChild(testPlayer);
			testPlayer.x = stage.stageHeight;
			testPlayer.y = stage.stageHeight / 2;

			// add controls for Dark Room
			stage.addChild(goRight);
			goRight.x = goRight.width * 2.5;
			goRight.y = stage.stageHeight - (goRight.height * 2.5);

			stage.addChild(goLeft);
			goLeft.x = goLeft.width * .5;
			goLeft.y = stage.stageHeight - (goLeft.height * 2.5);

			stage.addChild(goUp);
			goUp.x = goUp.width * 1.5;
			goUp.y = stage.stageHeight - (goUp.height * 3.5);

			stage.addChild(goDown);
			goDown.x = goDown.width * 1.5;
			goDown.y = stage.stageHeight - (goDown.height * 1.5);

			textFormat.size = 48;

			// event listeners for Dark Room
			addEventListener(Event.ENTER_FRAME, roomTvUpdate);
			EnableMovement();
			
		}
		
		public function EnableMovement():void {
			/* Tap Movement System
			goRight.addEventListener(TouchEvent.TOUCH_TAP, MoveRight);
			goLeft.addEventListener(TouchEvent.TOUCH_TAP, MoveLeft);
			goUp.addEventListener(TouchEvent.TOUCH_TAP, MoveUp);
			goDown.addEventListener(TouchEvent.TOUCH_TAP, MoveDown);
			*/
			
			
			//Hold Movement System
			goRight.addEventListener(TouchEvent.TOUCH_BEGIN, MoveRight);
			goLeft.addEventListener(TouchEvent.TOUCH_BEGIN, MoveLeft);
			goUp.addEventListener(TouchEvent.TOUCH_BEGIN, MoveUp);
			goDown.addEventListener(TouchEvent.TOUCH_BEGIN, MoveDown);
			
			goRight.addEventListener(TouchEvent.TOUCH_END, stopMove);
			goLeft.addEventListener(TouchEvent.TOUCH_END, stopMove);
			goUp.addEventListener(TouchEvent.TOUCH_END, stopMove);
			goDown.addEventListener(TouchEvent.TOUCH_END, stopMove);
		}


		// control functions for Dark Room
		private function MoveRight(evt: TouchEvent): void {
			rightActive = true;
			if (facing!="Right"){
				facing = "Right";
				blakePlayer.scaleX = 1;
			}
		}

		private function MoveLeft(evt: TouchEvent): void {
			leftActive = true;
			if (facing!= "Left"){
				
				facing = "Left";
				blakePlayer.scaleX = -1;
			}
		}

		private function MoveUp(evt: TouchEvent): void {
			upActive = true;
		}

		private function MoveDown(evt: TouchEvent): void {
			downActive = true;
		}
		
		private function stopMove(evt:TouchEvent):void {
			rightActive = false;
			leftActive = false;
			upActive = false;
			downActive = false;
		}
		
		private function stopMove2(evt:TouchEvent):void {
			rightActive = false;
			leftActive = false;
		}


		// update function for Dark Room
		private function roomTvUpdate(evt: Event): void {

			if (rightActive == true) {
				testPlayer.x += moveLength;
			}
			if (leftActive == true) {
				testPlayer.x -= moveLength;
			}
			if (upActive == true) {
				testPlayer.y -= moveLength;
			}
			if (downActive == true) {
				testPlayer.y += moveLength;
			}
			
			// hitTestObject for hit objects in Dark Room
			if (testPlayer.hitTestObject(toeHit) && disableToe == false) {
				hitCounter++;
				stage.removeChild(toeHit);
				toeBool = true;
				disabledControls = true;
				dialogueOpen = true;
				disableToe = true;
			} else if (testPlayer.hitTestObject(lampHit) && disableLamp == false) {
				hitCounter++;
				stage.removeChild(lampHit);
				lampBool = true;
				disabledControls = true;
				dialogueOpen = true;
				disableLamp = true;
			} else if (testPlayer.hitTestObject(tableHit) && disableTable == false) {
				hitCounter++;
				stage.removeChild(tableHit);
				tableBool = true;
				disabledControls = true;
				dialogueOpen = true;
				disableTable = true;
			} else if (testPlayer.hitTestObject(lightHit) && disableLight == false) {
				hitCounter++;
				stage.removeChild(lightHit);
				lightBool = true;
				disabledControls = true;
				dialogueOpen = true;
				disableLight = true;
			} else if (testPlayer.hitTestObject(tvHit) && disableTv == false) {
				hitCounter++;
				stage.removeChild(tvHit);
				tvBool = true;
				dialogueOpen = true;
				disabledControls = true;
				disableTv = true;
			}

			if (testPlayer.y + (testPlayer.height / 2) > stage.stageHeight) {
				testPlayer.y = stage.stageHeight - (testPlayer.height / 2);
			} else if (testPlayer.y < (testPlayer.height / 4)) {
				testPlayer.y = testPlayer.height / 4;
			} else if (testPlayer.x + (testPlayer.width / 2) > stage.stageHeight * 2) {
				testPlayer.x = stage.stageHeight * 2 - (testPlayer.width / 2);
			} else if (testPlayer.x < (testPlayer.width / 4)) {
				testPlayer.x = testPlayer.width / 4;
			}

			if (hitCounter == 4) {
				AddTV();
			}

			// boolean settings for Dark Room
			if (dialogueOpen == true) {
				disabledControls = true;
				OpenDialogue();
			}

			if (disabledControls == true) {
				DisableMovement();
			}

		}

		//adding final object for Dark Room
		private function AddTV(): void {
			stage.addChild(tvHit);
			tvHit.x = stage.stageHeight;
			tvHit.y = stage.stageHeight / 2;
			disableTv = false;
		}

		// disabling movement for Dark Room
		private function DisableMovement(): void {
			/*
			// remove control EventListeners for Dark Room
			goRight.removeEventListener(TouchEvent.TOUCH_TAP, MoveRight);
			goLeft.removeEventListener(TouchEvent.TOUCH_TAP, MoveLeft);
			goUp.removeEventListener(TouchEvent.TOUCH_TAP, MoveUp);
			goDown.removeEventListener(TouchEvent.TOUCH_TAP, MoveDown);
			*/
			rightActive = false;
			leftActive = false;
			upActive = false;
			downActive = false;
			//Hold Movement System
		}

		// opening dialogue for Dark Room
		private function OpenDialogue(): void {
			// adding dialogue box
			stage.addChild(dialogueBox);
			stage.addChild(mainTextBox);
			dialogueBox.x = stage.stageHeight / 2;
			dialogueBox.y = 10;
			mainTextBox.x = dialogueBox.x + 10;
			mainTextBox.y = dialogueBox.y + 10;
			mainTextBox.width = dialogueBox.width - 10;
			mainTextBox.height = dialogueBox.height - 10;
			mainTextBox.setTextFormat(textFormat);
			AppendingText();
		}

		// dialogue for Dark Room
		private function AppendingText(): void {
			// appending text for Dark Room
			if (toeBool == true) {
				mainTextBox.text = "Ow! My Toe!";
				// eventlistener for closing the dialogue for Dark Room
				mainTextBox.addEventListener(TouchEvent.TOUCH_TAP, CloseDialogue);
			} else if (lampBool == true) {
				mainTextBox.text = "*crash* I think I broke a Lamp...";
				// eventlistener for closing the dialogue for Dark Room
				mainTextBox.addEventListener(TouchEvent.TOUCH_TAP, CloseDialogue);
			} else if (tableBool == true) {
				mainTextBox.text = "Ouch! I found a table.";
				// eventlistener for closing the dialogue for Dark Room
				mainTextBox.addEventListener(TouchEvent.TOUCH_TAP, CloseDialogue);
			} else if (lightBool == true) {
				mainTextBox.text = "Where's the light switch?";
				// eventlistener for closing the dialogue for Dark Room
				mainTextBox.addEventListener(TouchEvent.TOUCH_TAP, CloseDialogue);
			} else if (tvBool == true) {
				mainTextBox.text = "Maybe I'll just turn the TV on...";
				mainTextBox.addEventListener(TouchEvent.TOUCH_TAP, CloseDialogue);
			}

		}

		// closing dialogue for Dark Room
		private function CloseDialogue(evt: TouchEvent): void {
			// resetting Booleans for Dark Room
			toeBool = false;
			lampBool = false;
			tableBool = false;
			lightBool = false;
			tvBool = false;
			dialogueOpen = false;
			disabledControls = false;

			// removing dialogue box for Dark Room
			stage.removeChild(dialogueBox);
			stage.removeChild(mainTextBox);
			// adding control eventlisteners for Dark Room 
			/*goRight.addEventListener(TouchEvent.TOUCH_TAP, MoveRight);
			goLeft.addEventListener(TouchEvent.TOUCH_TAP, MoveLeft);
			goUp.addEventListener(TouchEvent.TOUCH_TAP, MoveUp);
			goDown.addEventListener(TouchEvent.TOUCH_TAP, MoveDown);
			*/
			if (hitCounter == 5)
			{
				TransitionFunction();
			}
		}

		// transition to Alex's TV
		private function TransitionFunction(): void {
			background.gotoAndPlay(2);
			DisableMovement();
			goRight.removeEventListener(TouchEvent.TOUCH_BEGIN, MoveRight);
			goLeft.removeEventListener(TouchEvent.TOUCH_BEGIN, MoveLeft);
			goUp.removeEventListener(TouchEvent.TOUCH_BEGIN, MoveUp);
			goDown.removeEventListener(TouchEvent.TOUCH_BEGIN, MoveDown);
			
			goRight.removeEventListener(TouchEvent.TOUCH_END, stopMove);
			goLeft.removeEventListener(TouchEvent.TOUCH_END, stopMove);
			goUp.removeEventListener(TouchEvent.TOUCH_END, stopMove);
			goDown.removeEventListener(TouchEvent.TOUCH_END, stopMove);
			stage.removeChild(goRight);
			stage.removeChild(goLeft);
			stage.removeChild(goUp);
			stage.removeChild(goDown);
			stage.removeChild(testPlayer);

			/*goRight.removeEventListener(TouchEvent.TOUCH_TAP, MoveRight);
			goLeft.removeEventListener(TouchEvent.TOUCH_TAP, MoveLeft);
			goUp.removeEventListener(TouchEvent.TOUCH_TAP, MoveUp);
			goDown.removeEventListener(TouchEvent.TOUCH_TAP, MoveDown);
			*/
			Multitouch.inputMode = MultitouchInputMode.GESTURE;
			
			//stage.color = 0xFFFFFF;
			
//IMPORTANT RATIO STUFF LIONEL!!!!
//			\/\/\/\/\/\/\/\/\/\/
			television.width = stage.stageHeight*16/9;
			television.height = stage.stageHeight;
			stage.addChild(television);

			tvOff.x = 0;
			tvOff.y = 0;
			
			dialogueBox.removeEventListener(TouchEvent.TOUCH_TAP, CloseDialogue);
			stage.addEventListener(TransformGestureEvent.GESTURE_SWIPE, onSwipe);
			television.speaker.gotoAndPlay(1);
			
		}

		private function onSwipe(event: TransformGestureEvent): void {
			
			pageCounter -= event.offsetX;
			
			if (pageCounter < 1) pageCounter = 3;
			if (pageCounter > 3) pageCounter = 1;
			if (pageCounter == 1) {
				television.gotoAndStop(1);
				if (speechWatched == false){
					television.speaker.gotoAndPlay(1);
				} else {
					television.speaker.gotoAndPlay(145);
				}
				speakerSeen = true;
			} else if (pageCounter == 2) {
				television.gotoAndStop(2);
				leftSeen = true;
				speechWatched = true;
			} else if (pageCounter == 3) {
				television.gotoAndStop(3);
				rightSeen = true;
				speechWatched = true;
			}
			trace(pageCounter);
			trace("Speaker Seen: ", speakerSeen);
			trace("Left Seen: ", leftSeen);
			trace("Right Seen: ", rightSeen);
			trace("Speech Seen: ", speechWatched);
			if (speakerSeen == true && leftSeen == true && rightSeen == true) {
				if (tvOffActive == false && pageCounter == 1) {
					Multitouch.inputMode = MultitouchInputMode.TOUCH_POINT;
					stage.removeEventListener(TransformGestureEvent.GESTURE_SWIPE, onSwipe);
					stage.addChild(tvOff);
					tvOff.addEventListener(TouchEvent.TOUCH_TAP, tvOffTransition);
					tvOffActive = true;
					/*trace ("--Off Actvie--");
				} else {
					trace ("--Continue--");*/
				}
			}
		}

		function tvOffTransition(event: TouchEvent): void {
			trace("button hit");
			
			tvOff.removeEventListener(TouchEvent.TOUCH_TAP, tvOffTransition);

			/*transition = new transit;
			transition.x = -378;
			transition.y = 0;*/

			stage.removeChild(tvOff);
			stage.removeChild(television);
			removeEventListener(Event.ENTER_FRAME, roomTvUpdate);

			//REMOVE BELOW LINE AND CALL NEXT SCENE HERE
			deskScene();
		}

		//Marie's code
		public function deskScene(): void {
			deskAlpha = true;
			activateDesk = false;
			background.gotoAndPlay(49);
			stage.addChild(desk);
			desk.alpha = 0;
			desk.width = stage.stageHeight * 16/9;
			desk.height = stage.stageHeight;
			addEventListener(Event.ENTER_FRAME, deskUpdate);
			desk.gotoAndPlay(2);

		}

		public function deskUpdate(evt:Event):void {
			
			if(deskAlpha == true) {
				desk.alpha += .05;
			}
			
			if (desk.currentFrame == 57 && activateDesk == false) {				
				deskAlpha = false;
				desk.gotoAndPlay(58);
				
				if (catColor == true) {
					desk.catLines.gotoAndPlay(2);
				}
				if (lampColor == true) {
					//desk.lampLines.light.gotoAndPlay(1);
					desk.lampLines.gotoAndPlay(3);
				}
				if(bookColor == true) {
					desk.bookLines.gotoAndPlay(2);
				}
				if(gameColor == true) {
					desk.gameLines.gotoAndPlay(2);
				}
				
				deskInterface();
			}
			
			if (catLoop == true && desk.catLines.currentFrame == 84) {
				desk.catLines.gotoAndPlay(2);
			}
			
			if ((catColor == true) && (lampColor == true) &&(gameColor == true) && (bookColor == true)){
				desk.gotoAndPlay(60);
				desk.catBtn.visible = false;
			}

		}
		
		public function deskInterface():void {
			activateDesk = true;
			trace("desk interface initiated");
			desk.catBtn.addEventListener(TouchEvent.TOUCH_TAP, catBtnHandler);
			desk.catBtn.visible = false;
			desk.lampLines.addEventListener(TouchEvent.TOUCH_TAP, lampOn);
			desk.catLines.addEventListener(TouchEvent.TOUCH_TAP, catThought);
			desk.gameLines.addEventListener(TouchEvent.TOUCH_TAP, gameHandler);
			desk.bookLines.addEventListener(TouchEvent.TOUCH_TAP, bookHandler)
			
		}
		
		public function catBtnHandler(evt:TouchEvent):void {
			trace("catBtn");
			desk.catLines.addEventListener(TouchEvent.TOUCH_TAP, catThought);
			desk.catLines.gotoAndStop(2);
			desk.lampLines.visible = true;
			desk.gameLines.visible = true;
			desk.bookLines.visible = true;
			desk.deskLines.visible = true;
			desk.radio.visible = true;
			desk.catBtn.visible = false;
			desk.catText.visible = false;
			catLoop = false;
		}
		
		public function lampOn(evt:TouchEvent):void {
			trace("lamp");
			lampColor = true;
			desk.lampLines.removeEventListener(TouchEvent.TOUCH_TAP, lampOn);
			desk.lampLines.gotoAndPlay(3);
		}
		
		public function catThought(evt:TouchEvent):void {
			trace("cat");
			catColor = true;
			desk.catLines.removeEventListener(TouchEvent.TOUCH_TAP, catThought);
			catLoop = true;
			desk.catLines.gotoAndPlay(2);
			desk.lampLines.visible =false;
			desk.gameLines.visible =false;
			desk.bookLines.visible =false;
			desk.deskLines.visible = false;
			desk.radio.visible = false;
			desk.catBtn.visible = true;
			desk.catText.visible = true;
			desk.catText.gotoAndPlay(2);
		}
		
		public function gameHandler(evt:TouchEvent):void {
			//trace("game");
			background.gotoAndPlay(97);
			deskHandler();
			musicGame();
		}
		
		public function bookHandler(evt:TouchEvent):void {
			//trace("book");
			deskHandler();
			storyBook();
		}
		
		public function deskHandler():void {
			desk.catBtn.removeEventListener(TouchEvent.TOUCH_TAP, catBtnHandler);
			desk.catLines.removeEventListener(TouchEvent.TOUCH_TAP, catThought);
			desk.gameLines.removeEventListener(TouchEvent.TOUCH_TAP, gameHandler);
			desk.bookLines.removeEventListener(TouchEvent.TOUCH_TAP, bookHandler)
			removeEventListener(Event.ENTER_FRAME, deskUpdate);
			stage.removeChild(desk);
		}
		
		public function storyBook():void {
			facing = new String();
			facing = "right";
			rightActive = false;
			leftActive = false;
			
			trace("book");
			stage.addChild(book);
			book.x = 0;
			book.y = 0;
		
			stage.addChild(blakePlayer);
			blakePlayer.x = 170;
			blakePlayer.y = stage.stageHeight-100;
			
			stage.addChild(goRight);
			goRight.x = goRight.width*2.5;
			goRight.y = stage.stageHeight - (goRight.height);
			
			stage.addChild(goLeft);
			goLeft.x = goLeft.width*.5;
			goLeft.y = stage.stageHeight - (goLeft.height);
			
			textFormat.size = 48;
			
			// event listeners for Dark Room
			addEventListener(Event.ENTER_FRAME, bookUpdate);
			goRight.addEventListener(TouchEvent.TOUCH_BEGIN, MoveRight);
			goRight.addEventListener(TouchEvent.TOUCH_END, stopMove);
			goLeft.addEventListener(TouchEvent.TOUCH_BEGIN, MoveLeft);
			goLeft.addEventListener(TouchEvent.TOUCH_END, stopMove);
		}
		
		public function bookUpdate(evt:Event):void {
			
			if (rightActive == true) {
				blakePlayer.x += moveLength;
			}
			if (leftActive == true) {
				blakePlayer.x -= moveLength;
			}
			
			xcheck();
			
			/*if (blakePlayer.y + (blakePlayer.height/2) > stage.stageHeight)
			{
				blakePlayer.y = stage.stageHeight - (blakePlayer.height/2);
			}
			else if (blakePlayer.y < (blakePlayer.height/4))
			{
				blakePlayer.y = blakePlayer.height/4;
			}
			else if (blakePlayer.x + (blakePlayer.width/2) > stage.stageHeight*2)
			{
				blakePlayer.x = stage.stageHeight*2 - (blakePlayer.width/2);
			}
			else if (blakePlayer.x < (blakePlayer.width/4))
			{
				blakePlayer.x = blakePlayer.width/4;
			}*/
		}
		
		private function xcheck():void {
			if (pageNum!=7 && blakePlayer.x >= 1200)
			{
				pageNum++;
				blakePlayer.x = 170;
				book.gotoAndPlay(pageNum);
				trace(pageNum);
				
			}
			if (pageNum!=1 && blakePlayer.x <= 100)
			{
				pageNum--;
				blakePlayer.x = 1130;
				book.gotoAndPlay(pageNum);
			}
			if (pageNum == 7 && blakePlayer.x >= 1400) {
				lastPageHandler();
			}
			
		}
		
		public function lastPageHandler():void {
			goRight.removeEventListener(TouchEvent.TOUCH_BEGIN, MoveRight);
			goRight.removeEventListener(TouchEvent.TOUCH_END, stopMove);
			goLeft.removeEventListener(TouchEvent.TOUCH_BEGIN, MoveLeft);
			goLeft.removeEventListener(TouchEvent.TOUCH_END, stopMove);
			removeEventListener(Event.ENTER_FRAME, bookUpdate);
			stage.removeChild(goLeft);
			stage.removeChild(goRight);
			stage.removeChild(blakePlayer);
			stage.removeChild(book);
			bookColor = true;
			deskScene();
		}

		public function musicGame():void {
			trace("game");
			Multitouch.inputMode = MultitouchInputMode.TOUCH_POINT;
			score = 0;
			stage.addChild(sheet);
			sheet.x = 15;
			sheet.y = stage.stageHeight*.27;
			stage.addChild(title);
			title.x = stage.stageWidth*.70;
			title.y = stage.stageHeight* 0.05;
			stage.addChild(scoreText);
			scoreText.x = stage.stageWidth*1.30 - stage.stageWidth;
			scoreText.y = stage.stageHeight*0.80;
			scoreText.box.text = "Score: " + score;
			stage.addChild(startBtn);
			startBtn.x = stage.stageWidth*1.30;
			startBtn.y = stage.stageHeight*0.80;
			
			startBtn.addEventListener(TouchEvent.TOUCH_TAP, taparoo);
		}
		
		public function musicGame2():void {
			score = 0;
			scoreText.box.text = "Score: " + score;
			stage.addChild(sheet);
			sheet.x = 15;
			sheet.y = stage.stageHeight*.27;
			//stage.addChild(title);
			//title.x = stage.stageWidth*.70;
			//title.y = stage.stageHeight* 0.05;
			stage.addChild(startBtn);
			startBtn.x = stage.stageWidth*1.30;
			startBtn.y = stage.stageHeight*0.80;
		
			startBtn.addEventListener(TouchEvent.TOUCH_TAP, taparoo);
		}
		
		public function taparoo(event:TouchEvent):void {
			trace("hai");
			startBtn.alpha = 0;
			startBtn.removeEventListener(TouchEvent.TOUCH_TAP, taparoo);
			stage.removeChild(startBtn);
			sheet.addEventListener(TouchEvent.TOUCH_TAP, playGame);
			metroChan = metro.play();
			metroChan.addEventListener(Event.SOUND_COMPLETE, tempoComplete); 
		}
		
		public function tempoComplete(event: Event): void {
			trace("Hai");
			metroChan.removeEventListener(Event.SOUND_COMPLETE, tempoComplete); 
			maryChan = mary.play();
			maryChan.addEventListener(Event.SOUND_COMPLETE, maryComplete);
			sheet.gotoAndPlay(2);
			scoring = true;
			
		}
		
		public function maryComplete(event:Event):void {
			trace("hai");
			maryChan.removeEventListener(Event.SOUND_COMPLETE, maryComplete);
			endingHandler();
		}
		
		public function playGame(evt:TouchEvent):void {
			trace(score);
			if (scoring == true) {
				score += 100;
				scoreText.box.text = "Score: " + score;
			}
		}
		
		public function endingHandler():void {
			scoring = false;
			
			sheet.removeEventListener(TouchEvent.TOUCH_TAP, playGame);
			addEventListener(Event.ENTER_FRAME, alphaHandler);
			
			//stage.addChild(tryAgain);
			//tryAgain.TRY.alpha = 0;
			//tryAgain.again.alpha = 0;
			//tryAgain.x = stage.stageWidth*1.30; + 100;
			//tryAgain.y = stage.stageHeight*0.80;
			stage.addChild(RETURN);
			RETURN.alpha = 0;
			RETURN.x = stage.stageWidth*1.30 - 100;
			RETURN.y = stage.stageHeight*0.80;
			
			//tryAgain.addEventListener(TouchEvent.TOUCH_TAP, restart);
			RETURN.addEventListener(TouchEvent.TOUCH_TAP, goBack);
			
		}
		
		public function alphaHandler(evt:Event):void {
			alphaCount++
			//tryAgain.TRY.alpha += 0.05
			RETURN.alpha += 0.05;
			
			if (alphaCount >= 15) {
				//tryAgain.again.alpha += 0.05;
			}
			
			if (alphaCount == 30) {
				stage.removeEventListener(Event.ENTER_FRAME, alphaHandler);
			}
		}
		
		public function restart(evt:Event):void {
			trace("restart");
			//musicGame2();
		}
		
		public function goBack(evt:Event):void {
			trace("back to desk");
			gameColor = true;
			stage.removeChild(RETURN);
			//stage.removeChild(tryAgain);
			stage.removeChild(title);
			stage.removeChild(sheet);
			stage.removeChild(scoreText);
			deskScene();
		}
	}



}