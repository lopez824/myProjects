package Enemies.States {
	
	import Enemies.EnemyA;
	import Enemies.EnemyB;
	
		//to add more enemies that are controlled differently such as farther vision/increased chase radius or ranged attacks uncomment the  ennemyB code in IEnemyStates and then use the same code format as below again but change it to (enemyB:EnemyB), then use set the EnemyB class up like the EnemyA class but making changes to the radiuses and attack damages.
	
	public class Wander implements IEnemyStates {

		public function update(enemyA:EnemyA):void {
/*			enemyA.say("We have put up with this filthy place for far to long");*/
			enemyA.velocity.x += Math.random() * 0.2 - 0.1;
			enemyA.velocity.y += Math.random() * 0.2 - 0.1;
			
			if (enemyA.numCycles > 150) {
				enemyA.setState(EnemyA.IDLE);
			}
			
			/*if (!enemyA.canSeePlayer()) return;*/
			if (enemyA.distanceToPlayer < EnemyA.chaseRadius) {
				enemyA.setState(EnemyA.CHASE);
			/*}else if (enemyA.distanceToPlayer < EnemyA.attackRadius) {
				enemyA.setState(EnemyA.ATTACK);*/
			}
		}
		public function enter(enemyA:EnemyA):void {
			enemyA.gotoAndStop("moving");
			enemyA.speed = 1;
		}
		
		public function exit(enemyA:EnemyA):void {
			
		}

	}
	
}
