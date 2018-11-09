package Player.boiStates {
	import Player.BOI;
	import flash.display.MovieClip;
	import flash.display.Stage;
	import Player.inputClass;
	import Player.gun;

	public class movementState implements IBOI {
		
		public function update(player:BOI):void {
			player.speed = 1;
			if(player.Xmove < 0) {
				player.gotoAndStop("run");
				player.scaleX = -1;
			}
			if(player.Xmove > 0) {
				player.gotoAndStop("run");
				player.scaleX = 1;
			}
			if(player.Ymove != 0) {
				player.gotoAndStop("run");
			}
			if(player.Xmove == 0&&player.Ymove == 0) {
				player.gotoAndStop("idle");
			}
			if(player.input.placePlant == true&&player.plantTimer >= 120) {
				player.setState(BOI.planting);
			}
			if(player.input.placeFlower == true&&player.plantTimer >= 120) {
				player.setState(BOI.flowering);
			}
			if(player.input.placePumpkin == true&&player.plantTimer >= 120) {
				player.setState(BOI.placingPumpkin);
			}
		}
		public function enter(player:BOI):void {
		}
		public function exit(player:BOI):void {
		}
	}
}
