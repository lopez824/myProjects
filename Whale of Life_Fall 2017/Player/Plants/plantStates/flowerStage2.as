package Player.Plants.plantStates {
	import Player.Plants.plantClass2;
	import flash.display.MovieClip;
	import flash.display.Stage;
	
	public class flowerStage2 implements flowerBOI {
		
		public function update(planty:plantClass2):void {
			if(planty.waterTimer <= 240) {
				planty.waterTimer ++;
			}
			if(planty.waterTimer == 240) {
				planty.makeWaterItem();
			}
		}
		public function enter(planty:plantClass2):void {
			planty.gotoAndStop("stage2");
		}
		public function exit(planty:plantClass2):void {
		}
	}	
}
