package Enemies.States {
	
		import Enemies.EnemyA
		import Enemies.EnemyB;
	
		//to add more enemies that are controlled differently such as farther vision/increased chase radius or ranged attacks uncomment the  ennemyB code in IEnemyStates and then use the same code format as below again but change it to (enemyB:EnemyB), then use set the EnemyB class up like the EnemyA class but making changes to the radiuses and attack damages.
	
	public class Idle implements IEnemyStates{

		public function update(enemyA:EnemyA):void {
			enemyA.gotoAndStop("idle");
			if (enemyA.numCycles > 50) {
				enemyA.setState(EnemyA.WANDER);
			}
		}
		
		public function enter(enemyA:EnemyA): void {
			enemyA.gotoAndStop("idle");
			/*enemyA.say("Filthy Humans, I will kill you all.");*/ //possibly replace with actual voice lines using goTo andStop?
			enemyA.speed = 0;
		}
		
		public function exit(enemyA:EnemyA): void {
			
			enemyA.randomDirection();
		}

	}
	
}
