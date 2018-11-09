package {
	import flash.display.MovieClip;
	import flash.events.MouseEvent;

	public class sunriseActionsv4 extends MovieClip {

		var rng1: Number;
		var rng2: Number;
		var ending: Boolean;
		var start: Boolean;
		var check: Boolean;

		public function sunriseActionsv4() {
			// constructor code

			this.goomy.alpha = 0; // sets transparency for instances on the stage to zero. With 0 < n < 1.
			this.speech.alpha = 0;
			this.goomy_btn.alpha = 0;
			this.flash.alpha = 0;
			//this.goomz.mouth.gotoAndPlay(1);

			sunrise_btn.addEventListener(MouseEvent.MOUSE_DOWN, sunrise); // these three buttons listen for the user to click down on them, executing the three respective functions.
			sunset_btn.addEventListener(MouseEvent.MOUSE_DOWN, sunset);
			goomy_btn.addEventListener(MouseEvent.MOUSE_DOWN, goomyEvent);
		}

		public function sunrise(evt: MouseEvent): void {
			if (start == false) { // using two boolean variables so that the user can't execute the functions of each button repeatedly.
				ending = false; // boolean variables are "true" by default.


				this.goodbye.alpha = 0;
				this.goomy_btn.alpha = 1;
				this.goomy.alpha = 0;
				this.speech.alpha = 0;

				this.house.gotoAndPlay(2); //plays these instances at the designated frame.
				this.sun.gotoAndPlay(2);
				this.pokeball.gotoAndPlay(2);
				this.sky.gotoAndPlay(2);
			}
			start = true; // changes the value of start to "true". The sunset button only works if the value of start is "false".
		}

		public function goomyEvent(evt: MouseEvent): void {
			
			if (start == true) {
			
				this.flash.alpha = 1; // spawns the Pokemon with a flash to help mask pop in.
				this.goomy.alpha = 1;
				this.speech.alpha = 1;
				this.flash.gotoAndPlay(2);
			}
		}

		public function sunset(evt: MouseEvent): void {
			if (ending == false) {

				start = false
				rng1 = Math.random(); // assigned two variable to a random number 0 < n < 1. 
				rng2 = Math.random(); // this was done to randomize which of two events happen when the user clicks sunset.
				trace(rng1, rng2); // just shows the random numbers generated in the output.

				if (rng1 < rng2) {
					this.goodbye.alpha = 0;
					this.flash.alpha = 1;
					this.goomy.alpha = 0;
					this.speech.alpha = 0;
					this.goomy_btn.alpha = 0;

					this.flash.gotoAndPlay(26);
					this.sun.gotoAndPlay(26);
					this.pokeball.gotoAndPlay(26);
					this.sky.gotoAndPlay(26);
					this.house.gotoAndPlay(26)

				} else {
					this.goodbye.alpha = 1;
					this.flash.alpha = 1;
					this.goomy.alpha = 0;
					this.speech.alpha = 0;
					this.goomy_btn.alpha = 0;

					this.flash.gotoAndPlay(26);
					this.sun.gotoAndPlay(26);
					this.pokeball.gotoAndPlay(26);
					this.sky.gotoAndPlay(26);
					this.house.gotoAndPlay(26);
					this.house.gotoAndPlay(51);
					this.goodbye.gotoAndPlay(2);
				}
				ending = true;
				
			}
		}
	}

}