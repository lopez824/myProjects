package Player.Plants.plantStates {
	import Player.Plants.pumpkinClass;
	
	public class pumpkin2 implements pumpkinBOI {

		public function update(pumpkiny:pumpkinClass):void {
		}
		public function enter(pumpkiny:pumpkinClass):void {
			pumpkiny.gotoAndStop("big");
		}
		public function exit(pumpkiny:pumpkinClass):void {
		}

	}
	
}
