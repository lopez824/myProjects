package Player {
		import flash.display.MovieClip;
		import flash.events.Event;
	
	public class particle extends MovieClip {
		public static const PURGE_BULLET:String = "PURGE";
		public var xVel;
		public var yVel;
		private var WaterCounter:Number;
		private var plantBulletCounter:Number;

		public function particle() {
			plantBulletCounter = 0;
			WaterCounter = 0;
			xVel = 0;
			yVel = 0;
		}
		public function update():void {
			WaterCounter ++;
			this.x += xVel;
			this.y += yVel;
			if (WaterCounter >= 20) {
				dispatchEvent(new Event(particle.PURGE_BULLET, true, false));
				WaterCounter = 0;
			}
		}
		public function update2(): void {
			plantBulletCounter ++;
			this.x += xVel;
			this.y += yVel;
				if(plantBulletCounter >= 40 || x > 320 || x < 0 || y < 0 || y > 240) {
				dispatchEvent(new Event(particle.PURGE_BULLET, true, false));
				plantBulletCounter = 0;
			}
		}

	}
	
}
