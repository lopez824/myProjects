﻿package Enemies {

	import Enemies.States.Attack;
	import Enemies.States.Chase;
	import Enemies.States.Idle;
	import Enemies.States.Wander;
	import Enemies.States.IEnemyStates;
	import Enemies.Particle;
	import Player.BOI;
	import flash.display.MovieClip;
	import flash.geom.Point;
	import flash.text.TextField;
	import flash.text.TextFieldAutoSize;
	import flash.text.TextFormat;
	import Player.BOI;
	import Enemies.States.deadState;
	
	//this class tells the enemies what to do and where to go kind of like the turret class or balloon class in survive and shoot, it also controls the states of enemies, to add enemies with different functionality we have to make a new one of these classes for eaxh of the enemies, but we can just update the states to add in functions for when these enemies enter that state. 

	public class EnemyB extends MovieClip {
		
		public var target;
		public var healthA:int = 30;
		public var needsTarget:Boolean;
		public var turnRate: Number;
		
		public static const IDLE:IEnemyStates = new Idle();
		public static const WANDER:IEnemyStates = new Wander();
		public static const CHASE:IEnemyStates  = new Chase();
		public static const ATTACK:IEnemyStates = new Attack();
		public static const dead:IEnemyStates = new deadState();
		
		private const RAD_DEG:Number = 180 / Math.PI;
		
		private var _previousState:IEnemyStates;
		private var _currentState:IEnemyStates;
		
		private var _tf:TextField;
		public var velocity:Point = new Point();
		public var speed:Number = 0;
		
		public static var attackRadius:int;
		public static var chaseRadius:int;
		public var numCycles:int = 0;
		public static var state:String;
		public var deathCounter:Number;

		public function EnemyB() {
			// constructor code
			deathCounter = 0;
			_tf = new TextField();
			_tf.defaultTextFormat = new TextFormat("_sans", 10);
			_tf.autoSize = TextFieldAutoSize.LEFT;
			addChild(_tf);
			attackRadius = 20;
			chaseRadius = 150;
			
			needsTarget = true;
			turnRate = 10;
			
			/*graphics.lineStyle(0, 0xFF0000, .3);
			graphics.drawCircle(0, 0, attackRadius);
			
			graphics.lineStyle(0, 0x00FF00, .3);
			graphics.drawCircle(0, 0, chaseRadius);*/
			
			/*graphics.lineStyle(1, 0xFFFF00, 1);
			graphics.drawCircle(0, 0, 50);*/
			
			_currentState = IDLE;
			
		}
		public function say(str:String):void {
			_tf.text = str; //use gotoAndStop to add actual voicelines? 
			_tf.y = -_tf.height -2;
		}
		
		public function canSeePlayer():Boolean {
			var dot:Number = target.x * velocity.x + target.y * velocity.y;
			return dot > 0;
		}
		public function get distanceToPlayer():Number {
				
			var dx:Number = x - target.x;
			var dy:Number = y - target.y;
			return Math.sqrt(dx * dx + dy * dy);
		}
	
		public function randomDirection():void {
			var a:Number = Math.random() * 5;
			velocity.x = Math.cos(a);
			velocity.y = Math.sin(a);
		}
		public function damagePlayer():void {
			main.playerHealth -= 3;
			
			//trace("Not Whaley mc whaleface");
		}
		public function update():void {
			
/*			trace(x, y);*/
			//trace(_currentState);
			//trace(target);
			//trace(main.whaleHealth);
			if (!_currentState) return;
			numCycles++;
			_currentState.update(this);//what does (this) do after update
			x += velocity.x * speed;
			y += velocity.y * speed;
			if(velocity.x >= 0) {
				this.scaleX = -1;
			}
			else(this.scaleX = 1);
			
			if(x + velocity.x > stage.stageWidth || x + velocity.x < 0 ) {
				x = Math.max(0, Math.min(stage.stageWidth, x));
				velocity.x *= -1;
			}
			if (y + velocity.y > stage.stageHeight || y + velocity.y < 0) {
				y = Math.max(0, Math.min(stage.stageHeight, y));
				velocity.y *= -1;
			}
			
		}
		public function setState(newState:IEnemyStates):void {
			if(_currentState == newState) return;
			if (_currentState) {
				_currentState.exit(this);
			}
			_previousState = _currentState;
			_currentState = newState;
			_currentState.enter(this);
			numCycles = 0;
			
			
		}
		
		public function get previousState():IEnemyStates{return _previousState;}
					
		public function get currentState():IEnemyStates { return _currentState;}
	}
	
}

