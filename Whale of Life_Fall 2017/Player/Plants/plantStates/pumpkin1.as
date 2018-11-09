package Player.Plants.plantStates {
	import Player.Plants.pumpkinClass;
	
	public class pumpkin1 implements pumpkinBOI {

		public function update(pumpkiny:pumpkinClass):void {
			if(pumpkiny.plantHealth >= 75) {
				pumpkiny.setState(pumpkinClass.pumpkinStage2);
			}
		}
		public function enter(pumpkiny:pumpkinClass):void {
			pumpkiny.gotoAndStop("baby");
		}
		public function exit(pumpkiny:pumpkinClass):void {
		}

	}
	
}
