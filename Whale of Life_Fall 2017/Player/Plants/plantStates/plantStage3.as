package Player.Plants.plantStates {
	import Player.Plants.plantClass;
	import flash.display.MovieClip;
	import flash.display.Stage;
	
	public class plantStage3 implements plantyBOI {
		
		public function update(planty:plantClass):void {
			planty.plantShotCounter ++;
			if(planty.plantShotCounter >= 60) {
				planty.shoot(planty.x, planty.y, 10, 2);
			}
		}
		public function enter(planty:plantClass):void {
			planty.gotoAndStop("stage3");
		}
		public function exit(planty:plantClass):void {
		}
	}	
}
