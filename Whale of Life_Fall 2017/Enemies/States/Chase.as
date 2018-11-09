package Enemies.States {
	
	import Enemies.EnemyA
	import Enemies.EnemyB
	
	//to add more enemies that are controlled differently such as farther vision/increased chase radius or ranged attacks uncomment the  ennemyB code in IEnemyStates and then use the same code format as below again but change it to (enemyB:EnemyB), then use set the EnemyB class up like the EnemyA class but making changes to the radiuses and attack damages.
	
	public class Chase implements IEnemyStates {
		
		public function update(enemyA:EnemyA):void {
			
			var dx:Number = enemyA.target.x  - enemyA.x;
			var dy:Number = enemyA.target.y - enemyA.y;
			var rad:Number = Math.atan2(dy, dx);
			enemyA.velocity.x = Math.cos(rad);
			enemyA.velocity.y = Math.sin(rad);
			if (enemyA.numCycles < 30) return;
			/*enemyA.say("I found you filthy human!");*/
			enemyA.speed = 2;
			
			
			if (enemyA.distanceToPlayer > EnemyA.chaseRadius) {
				enemyA.setState(EnemyA.IDLE);
			
			} else if(enemyA.distanceToPlayer < EnemyA.attackRadius) {
					enemyA.setState(EnemyA.ATTACK)
			}
		}
		public function enter(enemyA:EnemyA):void {
			enemyA.gotoAndStop("moving");
			var dx:Number = enemyA.target.x  - enemyA.x;
			var dy:Number = enemyA.target.y  - enemyA.y;
			var rad:Number = Math.atan2(dy, dx);
			enemyA.velocity.x = Math.cos(rad);
			enemyA.velocity.y = Math.sin(rad);
			/*enemyA.say("You'll be dead soon enough!");*/
			enemyA.speed = 1;
		}
		
		public function exit(enemyA:EnemyA):void {
			
		}

	}
	
}
