(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Safari Day_atlas_", frames: [[856,310,30,56],[0,0,700,500],[750,310,42,52],[804,258,50,52],[702,0,256,256],[750,258,52,50],[702,318,30,58],[734,364,33,50],[769,364,34,48],[702,258,46,58],[0,502,1024,228],[856,258,34,50]]}
];


// symbols:



(lib.A = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.battleBackground = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.D = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.F = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Geodude = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.H = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.I = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.P = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.R = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.S = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.thug = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Y = function() {
	this.spriteSheet = ss["Safari Day_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.pkmInfo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Name
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbBBIAAgDIAFAAQAIAAADgFQADgDAAgLIAAgfIgkg2IgJgMQgCgDgHgDIgGgBIAAgDIA4AAIAAADIgDAAQgEAAgEACQgEACAAAFQAAADAGAJIAaApIAagnQAGgJAAgFQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgEgEIgIgBIAAgDIAuAAIAAADIgDAAIgHACQgFADgEAEQgEAEgFAJIggAxIAAAhQAAAMADADQADAEAIAAIAFAAIAAADg");
	this.shape.setTransform(139.9,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdBBIAAgDIAEAAQAJAAADgFQACgDAAgLIAAhXIgyBtIgDAAIgyhtIAABXQAAAMADADQADAEAIAAIAEAAIAAADIgtAAIAAgDIAFAAQAHAAAEgFQACgDAAgLIAAhVQAAgIgCgEQgBgDgDgCQgEgCgIAAIAAgDIAlAAIAuBlIAvhlIAlAAIAAADIgEAAQgJAAgEAFQgCADABALIAABVQAAAMACADQADAEAJAAIAEAAIAAADg");
	this.shape_1.setTransform(124,34.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtAxQgSgTAAgeQAAgfAVgTQASgRAZAAQAaAAASATQATATAAAdQAAAdgTAUQgTATgaAAQgbAAgSgTgAgcgvQgNAQAAAfQAAAfAOARQAKANARAAQASAAAMgOQAMgOAAgfQAAghgOgQQgKgNgSAAQgRAAgLANg");
	this.shape_2.setTransform(108.1,34.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgsAxQgTgTAAgeQAAgfAVgTQATgRAYAAQAZAAAUATQASATAAAdQAAAdgTAUQgSATgbAAQgaAAgSgTgAgcgvQgNAQAAAfQAAAfAOARQAKANARAAQASAAAMgOQAMgOAAgfQAAghgNgQQgLgNgSAAQgRAAgLANg");
	this.shape_3.setTransform(93.8,34.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgzAsQgOgSAAgYQgBgQAJgQQAJgTASgKQAOgIASAAIAOABQAFABALAEIAIACIADgCQABgCAAgEIADAAIAEApIgEAAQgEgQgJgHQgLgMgSAAQgZAAgNAUQgKARgBAXQAAARAIAQQAHAPAMAIQAMAHALAAQAHAAAHgCQAGgCAHgEIAAglQAAgKgBgDQgCgDgDgBQgEgBgHAAIAAgEIAzAAIAAAEIgDAAQgIAAgDAEQgBADAAALIAAAoQgMAGgLACQgKADgNAAQglAAgUgYg");
	this.shape_4.setTransform(79.8,34.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Level
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAwQgJgHgBgNIAMgBQACAJAFAEQAEAEAHAAQAFAAAFgDQAEgCADgFQAEgFACgIQACgIAAgIIgBgDQgEAGgGAFQgHAEgHgBQgOABgJgKQgKgJAAgQQAAgQALgKQAJgKAOAAQAKAAAJAGQAJAFAEALQAFAKgBAUQABAUgFAMQgEAMgKAHQgIAGgLAAQgNAAgHgHgAgOgkQgGAHAAAMQgBAKAHAGQAFAGAJAAQAJAAAGgGQAGgGAAgLQAAgLgGgIQgGgGgJAAQgHAAgHAHg");
	this.shape_5.setTransform(132.7,58.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAwQgIgHgBgNIAMgBQACAJAEAEQAFAEAHAAQAFAAAFgDQAEgCADgFQAEgFACgIQABgIAAgIIAAgDQgEAGgGAFQgIAEgHgBQgNABgJgKQgJgJAAgQQAAgQAKgKQAJgKAOAAQAKAAAJAGQAIAFAFALQAFAKAAAUQAAAUgFAMQgFAMgIAHQgJAGgLAAQgMAAgJgHgAgOgkQgGAHgBAMQAAAKAHAGQAFAGAJAAQAJAAAGgGQAGgGAAgLQAAgLgGgIQgHgGgIAAQgIAAgGAHg");
	this.shape_6.setTransform(124.3,58.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghA2IAAhrIAOAAIAABeIA1AAIAAANg");
	this.shape_7.setTransform(116.3,58.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGAnIAAgPIANAAIAAAPgAgGgXIAAgPIANAAIAAAPg");
	this.shape_8.setTransform(109.7,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// HP
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGAiIAAgNIANAAIAAANgAgGgUIAAgNIANAAIAAANg");
	this.shape_9.setTransform(107.1,79.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAvIAAhdIAjAAIAOACQAGAAAFAEQAFADADAGQACAFAAAHQABAMgIAIQgIAHgUABIgWAAIAAAmgAgWgCIAXAAQAMAAAFgDQAFgFAAgIQAAgGgDgEQgDgEgFgBIgMgBIgWAAg");
	this.shape_10.setTransform(101.2,78.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAYAvIAAgsIgvAAIAAAsIgMAAIAAhdIAMAAIAAAnIAvAAIAAgnIANAAIAABdg");
	this.shape_11.setTransform(91.9,78.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3,1,1).p("AKYAFQAAAUgfAPQgfAOpYAAQpXAAgggEQghgFgBgbQgBgaAigXQAhgWJXAAQJYAAAfATQAeASABAVg");
	this.shape_12.setTransform(180,77.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC00").s().p("Ap1AyQghgFgBgbQgBgaAigWQAhgXJXAAQJYAAAfATQAeASABAVQAAAUgfAPQgfAOpYAAQpXAAgggEg");
	this.shape_13.setTransform(180,77.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Outline
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("Ag9AlIBvgHAg9AlIAAhjIBvBcIAMAKAAtA4IAKAIAg9AlIAAAI");
	this.shape_14.setTransform(261.3,89.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(6,1,1).p("AwYi9IAAF7MAgxAAA");
	this.shape_15.setTransform(160.9,75.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag3gxIBvBcIhvAHg");
	this.shape_16.setTransform(260.7,87.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pkmInfo, new cjs.Rectangle(53.1,20.6,215.8,77.1), null);


(lib.ballCount = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ball Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWA3QgKgFgGgJQgGgJgBgMIAPgBQABAJAEAFQADAGAIADQAIAEAJAAQAIAAAHgDQAHgDADgEQADgFAAgFQAAgFgDgEQgDgEgHgDIgUgGQgQgDgGgDQgIgEgEgGQgEgHAAgIQAAgIAFgIQAFgHAJgEQAKgEALAAQAMAAAKAEQAJAEAGAIQAFAIAAAKIgOABQgCgLgGgFQgHgGgNAAQgNAAgGAFQgHAFAAAHQAAAGAFAEQAEAEASAFQASAEAHADQAKAEAFAHQAFAHAAAJQAAAJgGAIQgFAIgKAFQgJAEgNAAQgOAAgLgEg");
	this.shape.setTransform(465.5,256.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjA5IAAhxIAPAAIAABkIA4AAIAAANg");
	this.shape_1.setTransform(456.1,256.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjA5IAAhxIAQAAIAABkIA3AAIAAANg");
	this.shape_2.setTransform(447.2,256.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAkA5IgNgiIgvAAIgMAiIgRAAIAshxIAQAAIAuBxgAgHgWIgMAgIAlAAIgMgeIgHgYQgCALgEALg");
	this.shape_3.setTransform(437.1,256.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqA5IAAhxIAqAAQANAAAIADQAIAEAEAHQAFAHAAAIQAAAHgEAHQgEAGgIAEQAKADAGAHQAFAHAAAKQAAAIgDAHQgDAHgFAEQgFADgIACQgHACgLAAgAgbAsIAcAAIAKgBQAFgBAEgCQADgCACgEQADgEAAgGQAAgGgEgFQgDgFgGgCQgFgCgKAAIgbAAgAgbgIIAZAAIANgBQAGgCADgEQADgEAAgGQAAgGgDgEQgCgFgGgBQgFgCgLAAIgXAAg");
	this.shape_4.setTransform(426.6,256.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_5.setTransform(414.5,256.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAgA5IgPgYIgLgPIgHgIIgHgDIgJgBIgSAAIAAAzIgOAAIAAhxIAxAAQAPAAAJADQAHADAFAIQAFAIAAAJQAAAMgHAJQgJAHgQACIAJAGQAGAGAHAJIAUAfgAgjgGIAiAAQAIAAAHgCQAFgCAEgFQACgEABgGQAAgIgHgFQgFgGgNAAIgkAAg");
	this.shape_6.setTransform(407,256.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAkA5IgNgiIgvAAIgNAiIgQAAIAshxIAPAAIAvBxgAgHgWIgNAgIAmAAIgMgeIgHgYQgCALgEALg");
	this.shape_7.setTransform(395.4,256.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmA5IAAhxIBNAAIAAANIg9AAIAAAkIA0AAIAAAMIg0AAIAAA0g");
	this.shape_8.setTransform(385.4,256.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAkA5IgNgiIgvAAIgNAiIgPAAIAshxIAOAAIAwBxgAgHgWIgNAgIAmAAIgMgeIgHgYQgCALgEALg");
	this.shape_9.setTransform(375,256.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWA3QgKgFgGgJQgGgJgBgMIAPgBQABAJAEAFQADAGAIADQAIAEAJAAQAIAAAHgDQAHgDADgEQADgFAAgFQAAgFgDgEQgDgEgHgDIgUgGQgQgDgGgDQgIgEgEgGQgEgHAAgIQAAgIAFgIQAFgHAJgEQAKgEALAAQAMAAAKAEQAJAEAGAIQAFAIAAAKIgOABQgCgLgGgFQgHgGgNAAQgNAAgGAFQgHAFAAAHQAAAGAFAEQAEAEASAFQASAEAHADQAKAEAFAHQAFAHAAAJQAAAJgGAIQgFAIgKAFQgJAEgNAAQgOAAgLgEg");
	this.shape_10.setTransform(364.2,256.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Count Text
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAqIAAgQIAPAAIAAAQgAgHgZIAAgQIAPAAIAAAQg");
	this.shape_11.setTransform(461.9,293.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAguIgKAAIAAgMIAKAAIAAgUIANgJIAAAdIAOAAIAAAMIgOAAIAAAvQAAAGABACQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAIAFABIAGAAIACANIgLABQgHAAgDgDg");
	this.shape_12.setTransform(457.5,292.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLA6IAAhHIgMAAIAAgLIAMAAIAAgJQAAgIACgEQACgFAFgEQAEgDAJAAIANABIgCAMIgIAAQgHAAgCACQgDADAAAIIAAAHIAQAAIAAALIgQAAIAABHg");
	this.shape_13.setTransform(453.3,292.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbAgQgKgLAAgUQAAgUAKgMQALgMAQAAQARAAALAMQAKAMAAATIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEAMgJAHQgJAHgPABQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_14.setTransform(446.3,293.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgjA5IAAhxIAQAAIAABkIA3AAIAAANg");
	this.shape_15.setTransform(437.7,292.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAKBBQgPgLgFgWQgHASgMAJQgMAIgRAAQgZAAgSgSQgRgSAAgfQAAgdASgTQASgSAZAAQAQAAAMAIQAMAJAHARQAHgVAOgMQAQgLAVAAQAeAAAUAVQAVAVAAAiQAAAigVAVQgUAWgfAAQgWAAgPgMgAAOghQgNAOAAAUQAAAUANANQAOANAUAAQAMAAALgGQAMgFAGgMQAGgLAAgNQAAgUgNgNQgNgOgUAAQgVAAgOAOgAhUgaQgKALAAAPQAAAQAKALQALALAOAAQARAAAKgLQALgKAAgRQAAgQgLgKQgKgLgPAAQgQAAgLALg");
	this.shape_16.setTransform(502.1,291.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Outline
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(6,1,1).p("AQZi9IAAF7MggxAAA");
	this.shape_17.setTransform(422.5,287);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AA+AlIAAAIAA+AlIAAhjIhvBcIgMAKAgsA4IgKAIAA+AlIhvgH");
	this.shape_18.setTransform(322.1,300.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag3ArIBvhcIAABjg");
	this.shape_19.setTransform(322.7,299.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ballCount, new cjs.Rectangle(314.6,245.4,215.8,63.6), null);


(lib.Help = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("(Happy Safari Day!!)\n:D", "24px 'Arial'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 294;
	this.text.parent = this;
	this.text.setTransform(-115,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Help, new cjs.Rectangle(-117,-3.7,298,69.7), null);


(lib.SecretBtn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("ApyJzIAAzlITlAAIAATlg");
	this.shape.setTransform(13.7,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-28.9,125.5,125.5);


(lib.SecretBtn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqTKUIAA0nIUnAAIAAUng");
	this.shape.setTransform(-3,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-43.9,132,132);


(lib.Run_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hit Box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjoBoIAAjPIHRAAIAADPg");
	this.shape.setTransform(-29.6,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA8BRIhoh/IAABhQAAAOADAEQAEAFAKAAIAGAAIAAAEIg4AAIAAgEIAFAAQALAAAEgGQACgEAAgNIAAhuIgKgKQgEgDgGgCIgKgBIAAgFIAqAAIBgB3IAAhbQAAgPgCgDQgFgFgKAAIgFAAIAAgFIA4AAIAAAFIgGAAQgLAAgDAGQgDAEAAANIAACFg");
	this.shape_1.setTransform(-9.3,-14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmBIQgNgJgGgPQgEgLAAgcIAAg+QAAgOgDgFQgEgEgKAAIgFAAIAAgFIBEAAIAAAFIgGAAQgKAAgEAGQgDAEAAANIAABFIABAVQACAMAFAHQAEAGAIAFQAJAEALAAQAPAAANgHQANgGAEgLQAEgKABgaIAAhAQgBgOgDgEQgEgFgKAAIgGAAIAAgFIA5AAIAAAFIgGAAQgJAAgGAIQgCADAAANIAABAQAAAYgFAOQgFANgOAJQgOAJgYAAQgZAAgNgJg");
	this.shape_2.setTransform(-26.4,-14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAlBQIg1hLIgKABIgDAAIgEgBIAAAvQAAAPAEADQAEAFAJAAIAGAAIAAAFIhEAAIAAgFIAGAAQAKAAAFgGQACgEAAgNIAAhnQAAgPgEgDQgEgFgJAAIgGAAIAAgFIA6AAQAYAAANAFQAMADAIAKQAIAKAAAOQAAAOgKALQgJAKgUAEIAhAtQALAQAIAGQAIAFANABIAAAFgAghhEIAABDIAEAAIADAAQAWAAALgKQALgKAAgPQABgPgKgJQgJgKgPAAIgSACg");
	this.shape_3.setTransform(-42.7,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-30.3,72,30.6);


(lib.Rock_Btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hit Box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkoBoIAAjPIJRAAIAADPg");
	this.shape.setTransform(-22,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKBQIAAgFQAHAAADgCQADgDAAgCIgBgFIgIgJIg2g2IAAA0QAAAMACADIAFAFQAFADAGAAIAFAAIAAAFIhEAAIAAgFIAGAAQAKAAAEgFQADgFAAgNIAAhnQAAgLgCgFQgBgCgDgCQgGgDgFAAIgGAAIAAgFIBEAAIAAAFIgFAAQgGAAgFADQgEABgBAFQgCADAAALIAAAyIARgQQAhgfAIgLQADgFAAgEQAAgCgDgCQgCgCgGAAIgEAAIAAgFIA7AAIAAAFQgFAAgFACQgEABgGADQgGAEgJAIIgYAYIgXAYIA6A5QAOAPAKAGQAKAFALAAIAAAFg");
	this.shape_1.setTransform(7.3,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2A2QgRgWAAgeQAAgXALgTQALgUATgLQASgLAVAAQASAAAQAJIAHACQADAAADgCQADgDABgGIAEAAIAEA2IgEAAQgHgZgNgKQgOgKgTAAQgPAAgMAIQgNAIgHARQgIARAAAZQAAAXAHAPQAHAQAOAIQAOAJARAAQAPAAAMgHQAMgHAOgTIAEACQgMAVgQAKQgQAKgWAAQgnAAgVgdg");
	this.shape_2.setTransform(-9.6,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2A8QgXgYAAgkQAAglAagZQAWgUAfAAQAeAAAXAXQAXAYAAAjQAAAjgXAYQgXAYggAAQggAAgWgXgAgig6QgQAUAAAmQAAAmARAVQAMAQAVAAQAWAAAOgSQAPgRAAgmQAAgngQgVQgNgPgWAAQgVAAgNAPg");
	this.shape_3.setTransform(-26.4,-14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAlBQIg1hLIgKABIgDAAIgEgBIAAAvQAAAPAEADQAEAFAJAAIAGAAIAAAFIhEAAIAAgFIAGAAQAKAAAFgGQACgEAAgNIAAhnQAAgPgEgDQgEgFgJAAIgGAAIAAgFIA6AAQAYAAANAFQAMADAIAKQAIAKAAAOQAAAOgKALQgJAKgUAEIAhAtQALAQAIAGQAIAFANABIAAAFgAghhEIAABDIAEAAIADAAQAWAAALgKQALgKAAgPQABgPgKgJQgJgKgPAAIgSACg");
	this.shape_4.setTransform(-42.7,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-30.3,73,30.6);


(lib.Ball_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hit Box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkuBoIAAjPIJdAAIAADPg");
	this.shape.setTransform(-21.2,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDBQIAAgFIAGAAQAKAAAEgGQACgEAAgNIAAhnQAAgOgDgEQgEgFgJAAIgGAAIAAgFIBHAAIAAAFQgMAAgFADQgFABgCAFQgCADAAAPIAABjQAAAJACADQABADADACQADABAOAAIAMAAQASAAAIgEQAHgCAGgHQAGgHAGgOIAEAAIgNAsg");
	this.shape_1.setTransform(4.3,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhDBQIAAgFIAGAAQAKAAAEgGQACgEAAgNIAAhnQAAgOgDgEQgEgFgJAAIgGAAIAAgFIBHAAIAAAFQgMAAgFADQgFABgCAFQgCADAAAPIAABjQAAAJACADQABADADACQADABAOAAIAMAAQASAAAIgEQAHgCAGgHQAGgHAGgOIAEAAIgNAsg");
	this.shape_2.setTransform(-10.3,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWBRIAAgEQAJgBAEgCQADgDAAgEQAAgFgFgLIgJgXIg9AAIgLAZQgEAJAAAFQAAAEAEACQADADAMABIAAAEIgyAAIAAgEQAKgCADgDQAFgFAIgSIA4iBIADAAIA3CDQAHAQAFAFQAGAEAJABIAAAEgAghATIA1AAIgag/g");
	this.shape_3.setTransform(-26.4,-15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGBQIAAgFIAFAAQAKAAAFgGQACgEAAgNIAAhnQABgOgEgEQgEgFgKAAIgFAAIAAgFIBEAAQASAAAMADQASAFAJAKQAJALAAAOQAAAMgHAJQgHAKgOAFQAQACAIAHQAMAMAAAPQAAAMgIALQgHALgNAEQgNAGgcAAgAgZADIAABBQANADANAAQAVAAALgJQAMgKAAgOQAAgJgGgJQgFgJgLgEQgMgFgQAAIgLAAIgJABgAgZhEIAAA9IAKABIAMAAQAQABAJgEQAIgEAFgHQAEgIAAgJQAAgOgLgKQgLgKgVAAQgLABgKACg");
	this.shape_4.setTransform(-43.4,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-30.3,70,30.6);


(lib.Bait_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hit Box
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkcBoIAAjPII5AAIAADPg");
	this.shape.setTransform(-21.1,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghBQIAAgFIAFAAQALAAAEgGQACgDAAgOIAAh5IgTAAQgLABgFABQgGACgEAHQgFAGAAALIgFAAIACgmICBAAIACAmIgFAAQgBgKgDgEQgDgHgGgDQgGgDgKgBIgWAAIAAB5QgBAOAEAEQAEAFAKAAIAFAAIAAAFg");
	this.shape_1.setTransform(-2.2,-14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AghBQIAAgFIAGAAQAJAAAFgFQADgFAAgNIAAhnQAAgMgCgDQgBgDgDgCQgGgDgFAAIgGAAIAAgFIBDAAIAAAFIgGAAQgKAAgEAFQgDAFAAANIAABnQAAAMABADIAGAFQAFADAFAAIAGAAIAAAFg");
	this.shape_2.setTransform(-13.6,-14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWBRIAAgEQAJgBAEgCQADgDAAgEQAAgFgFgLIgJgXIg9AAIgLAZQgEAJAAAFQAAAEAEACQADADAMABIAAAEIgyAAIAAgEQAKgCADgDQAFgFAIgSIA4iBIADAAIA3CDQAHAQAFAFQAGAEAJABIAAAEgAghATIA1AAIgag/g");
	this.shape_3.setTransform(-26.4,-15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGBQIAAgFIAFAAQAKAAAFgGQACgEAAgNIAAhnQABgOgEgEQgEgFgKAAIgFAAIAAgFIBEAAQASAAAMADQASAFAJAKQAJALAAAOQAAAMgHAJQgHAKgOAFQAQACAIAHQAMAMAAAPQAAAMgIALQgHALgNAEQgNAGgcAAgAgZADIAABBQANADANAAQAVAAALgJQAMgKAAgOQAAgJgGgJQgFgJgLgEQgMgFgQAAIgLAAIgJABgAgZhEIAAA9IAKABIAMAAQAQABAJgEQAIgEAFgHQAEgIAAgJQAAgOgLgKQgLgKgVAAQgLABgKACg");
	this.shape_4.setTransform(-43.4,-14.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-30.3,64.1,30.6);


(lib.Y_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Y();
	this.instance.parent = this;
	this.instance.setTransform(-18,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Y_1, new cjs.Rectangle(-18,-25,34,50), null);


(lib.S_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.S();
	this.instance.parent = this;
	this.instance.setTransform(-24,-33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.S_1, new cjs.Rectangle(-24,-33,46,58), null);


(lib.R_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.R();
	this.instance.parent = this;
	this.instance.setTransform(-18,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.R_1, new cjs.Rectangle(-18,-25,34,48), null);


(lib.P_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.P();
	this.instance.parent = this;
	this.instance.setTransform(-19,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.P_1, new cjs.Rectangle(-19,-28,33,50), null);


(lib.I_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.I();
	this.instance.parent = this;
	this.instance.setTransform(-16,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.I_1, new cjs.Rectangle(-16,-31,30,58), null);


(lib.H_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.H();
	this.instance.parent = this;
	this.instance.setTransform(-27,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.H_1, new cjs.Rectangle(-27,-27,52,50), null);


(lib.F_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.F();
	this.instance.parent = this;
	this.instance.setTransform(-26,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.F_1, new cjs.Rectangle(-26,-29,50,52), null);


(lib.D_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.D();
	this.instance.parent = this;
	this.instance.setTransform(-20,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.D_1, new cjs.Rectangle(-20,-28,42,52), null);


(lib.A_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.A();
	this.instance.parent = this;
	this.instance.setTransform(-17,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A_1, new cjs.Rectangle(-17,-31,30,56), null);


(lib.HolidayBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A9cVHMAAAgqNMA65AAAMAAAAqNg");
	this.shape.setTransform(-5.5,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194,-86.7,377.1,270.3);


(lib.Yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Tint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,153,0,0.247)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape.setTransform(274.5,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,549,400);


(lib.Blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape.setTransform(274.5,200);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(8,100,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_1.setTransform(274.5,200);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(16,98,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_2.setTransform(274.5,200);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(24,96,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_3.setTransform(274.5,200);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(33,94,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_4.setTransform(274.5,200);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(41,92,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_5.setTransform(274.5,200);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(49,90,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_6.setTransform(274.5,200);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(57,88,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_7.setTransform(274.5,200);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(65,86,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_8.setTransform(274.5,200);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(73,84,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_9.setTransform(274.5,200);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(82,82,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_10.setTransform(274.5,200);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(90,80,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_11.setTransform(274.5,200);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(98,78,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_12.setTransform(274.5,200);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(106,75,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_13.setTransform(274.5,200);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(114,73,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_14.setTransform(274.5,200);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(122,71,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_15.setTransform(274.5,200);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(131,69,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_16.setTransform(274.5,200);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(139,67,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_17.setTransform(274.5,200);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(147,65,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_18.setTransform(274.5,200);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(155,63,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_19.setTransform(274.5,200);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(163,61,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_20.setTransform(274.5,200);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(171,59,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_21.setTransform(274.5,200);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(180,57,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_22.setTransform(274.5,200);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(188,55,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_23.setTransform(274.5,200);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(196,53,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_24.setTransform(274.5,200);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(204,51,153,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_25.setTransform(274.5,200);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(202,49,147,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_26.setTransform(274.5,200);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(200,47,141,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_27.setTransform(274.5,200);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(198,45,135,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_28.setTransform(274.5,200);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(196,43,129,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_29.setTransform(274.5,200);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(194,41,122,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_30.setTransform(274.5,200);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(192,39,116,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_31.setTransform(274.5,200);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(190,37,110,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_32.setTransform(274.5,200);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(188,35,104,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_33.setTransform(274.5,200);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(186,33,98,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_34.setTransform(274.5,200);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(184,31,92,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_35.setTransform(274.5,200);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(182,29,86,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_36.setTransform(274.5,200);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(180,27,80,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_37.setTransform(274.5,200);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(177,24,73,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_38.setTransform(274.5,200);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(175,22,67,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_39.setTransform(274.5,200);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(173,20,61,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_40.setTransform(274.5,200);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(171,18,55,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_41.setTransform(274.5,200);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(169,16,49,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_42.setTransform(274.5,200);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(167,14,43,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_43.setTransform(274.5,200);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(165,12,37,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_44.setTransform(274.5,200);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(163,10,31,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_45.setTransform(274.5,200);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(161,8,24,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_46.setTransform(274.5,200);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(159,6,18,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_47.setTransform(274.5,200);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(157,4,12,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_48.setTransform(274.5,200);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(155,2,6,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_49.setTransform(274.5,200);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(153,0,0,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_50.setTransform(274.5,200);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(157,10,2,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_51.setTransform(274.5,200);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(161,20,4,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_52.setTransform(274.5,200);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(165,31,6,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_53.setTransform(274.5,200);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(169,41,8,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_54.setTransform(274.5,200);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(173,51,10,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_55.setTransform(274.5,200);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(177,61,12,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_56.setTransform(274.5,200);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(182,71,14,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_57.setTransform(274.5,200);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(186,82,16,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_58.setTransform(274.5,200);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(190,92,18,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_59.setTransform(274.5,200);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(194,102,20,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_60.setTransform(274.5,200);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(198,112,22,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_61.setTransform(274.5,200);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(202,122,24,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_62.setTransform(274.5,200);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(206,133,27,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_63.setTransform(274.5,200);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(210,143,29,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_64.setTransform(274.5,200);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(214,153,31,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_65.setTransform(274.5,200);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(218,163,33,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_66.setTransform(274.5,200);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(222,173,35,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_67.setTransform(274.5,200);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(226,184,37,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_68.setTransform(274.5,200);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(231,194,39,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_69.setTransform(274.5,200);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(235,204,41,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_70.setTransform(274.5,200);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(239,214,43,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_71.setTransform(274.5,200);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(243,224,45,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_72.setTransform(274.5,200);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(247,235,47,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_73.setTransform(274.5,200);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(251,245,49,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_74.setTransform(274.5,200);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_75.setTransform(274.5,200);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(247,251,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_76.setTransform(274.5,200);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(239,247,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_77.setTransform(274.5,200);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(231,243,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_78.setTransform(274.5,200);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(222,239,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_79.setTransform(274.5,200);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(214,235,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_80.setTransform(274.5,200);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(206,231,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_81.setTransform(274.5,200);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(198,226,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_82.setTransform(274.5,200);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(190,222,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_83.setTransform(274.5,200);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(182,218,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_84.setTransform(274.5,200);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(173,214,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_85.setTransform(274.5,200);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(165,210,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_86.setTransform(274.5,200);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(157,206,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_87.setTransform(274.5,200);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(149,202,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_88.setTransform(274.5,200);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(141,198,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_89.setTransform(274.5,200);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(133,194,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_90.setTransform(274.5,200);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(124,190,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_91.setTransform(274.5,200);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(116,186,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_92.setTransform(274.5,200);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(108,182,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_93.setTransform(274.5,200);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(100,177,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_94.setTransform(274.5,200);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(92,173,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_95.setTransform(274.5,200);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(84,169,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_96.setTransform(274.5,200);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(75,165,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_97.setTransform(274.5,200);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(67,161,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_98.setTransform(274.5,200);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(59,157,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_99.setTransform(274.5,200);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(51,153,51,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_100.setTransform(274.5,200);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(49,151,57,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_101.setTransform(274.5,200);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(47,149,63,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_102.setTransform(274.5,200);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(45,147,69,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_103.setTransform(274.5,200);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(43,145,75,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_104.setTransform(274.5,200);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(41,143,82,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_105.setTransform(274.5,200);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("rgba(39,141,88,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_106.setTransform(274.5,200);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(37,139,94,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_107.setTransform(274.5,200);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(35,137,100,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_108.setTransform(274.5,200);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(33,135,106,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_109.setTransform(274.5,200);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("rgba(31,133,112,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_110.setTransform(274.5,200);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(29,131,118,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_111.setTransform(274.5,200);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(27,129,124,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_112.setTransform(274.5,200);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(24,126,131,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_113.setTransform(274.5,200);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(22,124,137,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_114.setTransform(274.5,200);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(20,122,143,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_115.setTransform(274.5,200);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(18,120,149,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_116.setTransform(274.5,200);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(16,118,155,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_117.setTransform(274.5,200);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(14,116,161,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_118.setTransform(274.5,200);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(12,114,167,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_119.setTransform(274.5,200);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(10,112,173,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_120.setTransform(274.5,200);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(8,110,180,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_121.setTransform(274.5,200);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(6,108,186,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_122.setTransform(274.5,200);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(4,106,192,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_123.setTransform(274.5,200);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(2,104,198,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_124.setTransform(274.5,200);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(0,102,204,0.498)").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape_125.setTransform(274.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,549,400);


(lib.Top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AAAAAQAAAAABAA");
	this.shape.setTransform(10.1,146);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("A3DLPQA8gOA7gMQKKiHKJgKQAOglBDhEQB8h9CygCQCygEBgBbQBfBaANAmQGiAeHEBOQg/oOmGmGQnQnQqRAAQqPAAnRHQQmrGrgiJQQAmgJAngJQAIgCAIgCQADgBAEAA");
	this.shape_1.setTransform(157.8,74.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Brown
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#885A26").s().p("A3KGqQARARAagPQAagOAFgaQADgUgGgeIgKgzQgFglANgmQAMggAXgYIAGgGQBjgxB0ADQB5ADBkA7QAKAUgPArQgPAtAGAUQAHAXAZAMQAYALAbgDQASgCAfgJQAigKAOgDQAngFA+AOQBOARAYACQBgAHBmhDQBFguBhhmQAXgYAPgKQAYgQAXADQAhAEAOAmQANAlgRAgQgOAcggAWQgWAPgoARQgrAUgVAMQgiAVgaAaQALA5AKAYQAKAZgdAcQgvAsheAAIhMgCQgsgBgfAGQglAJgJASQgIALAEAPQAFAPAOACQjcA6juAUQA6g/g6glInCB6QgHiUA9iHgAQzGsQg/gQg2gHQg2gHgagoQgYggAFggQAFgbAjgdQAvgkA7gdQA7gcBogLQBuggBOhhQAaAWATAaQAOASAgBHQAgBHAlBLQAlBMgaAEIhcALQhBAIh0AdQhLASg0AAQgdAAgXgGgAAkB7QgWgOgNgpQgQg0gIgNQgSgagogUQgRgIg6gVQhfghgKg1QgEgZAMgdQAIgUAUgeQAOgVAKgKQAQgQARgDQAOgCAVAGIAjALQArAMAwgTQAggNA1glQBAgsAXgNQAzgbArAAQgEgpgwgZQgagOhEgSQhlgZgqhGQgUgJAugjQAsgjAhACQAiABATAVIArAtQAkASArABIBAACQAWABAhgRQAXgMAQgDQAlgGBIAQQBIARAeAhQgTAOgWAUQgVATgDAbQAXANApADIBDAEQAlAEAaAYQAdAZgHAfQhUAkhsAiQhrAig9BWQgbAmgIAlQgLAsATAhQAXApA2AIQAyAHAxgVQAjgOAsgfIBMg0QAtgdAkgPQAvgSAqACQAwADAlAeQAnAhACAsQACA5g5AnQgxAkhEAHQhEAHhegLQhtgRg2gHQhfgLhFAIQhaAJhAAnQhAAogPAGQgXAJgTAAQgUAAgQgLgAp4nHIgcgNQgRgIgNgCQgbgFgrAQQgpAPglALQAugtA8gcICEg9IAWgJQANgEAJABQAJABAPAGIAWAIQALACAQgBIAbgBQAjAAAOAUQAKAPgKAWQgJATgRAOQgqAhg2AHQgPACgOAAQgnAAgjgPg");
	this.shape_2.setTransform(155.2,70.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Forest Green
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F5842").s().p("A1OE2QAxiuBgiWQB8gWCgARQChAQBRA+IBoBRQAXASAngBQBOgDAbhTQAchSgUhHQgVhHhMgbQhMgahsAAQhsAAhEgGQhEgFADhLQBkhUBvgIQBvgHDCgKQETgNEDgmQB8gTBPgVQBugeBQgwQB7hJAjgMQBdgkA3AvQhLA3gkAwQgzBEANBAQANBIBQAkQBIAgBCgVICkgyQBhgcAxAJQAyAKBJBOQBIBOATAjQmFCfpXgtQhOATgzAmQg8AtAtAvQDvAkh3BLQh3BLgLgKQgLgLgrgHQgsgHg2ACQg2ABgVArQgWAsgGAcQgGAdiiAtQiiAsk4AwQk5AwnxBUQARi9AxitgAiFiZQgXAbgGAgQgEAYAAAVQAAAeAKAOQAHAKAYAPQAQAKAJAEQAPAFANgBQAPgDAUgNQARgLALgLIAJgSIAJgSQAFgKAWgeQARgYAGgRQAIgSgFgLQgDgHgRgLQgbgOgmgEQgYgDgwAAQgVAMgRAUg");
	this.shape_3.setTransform(142.6,79.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Tan
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8C58B").s().p("ALtJYIhWghQgGgHgbgTQgagTgOgCQgOgCgIgJQgLgLAGgIQACgFAOAAQAVABArAFQAqAFAVABQBsAEBcgrQANgGAHgCQALgDAIAFQAKAEADAMQAEAKgEALQgGASgVAQQgxArgqAaQgZARgRABIgIABQgRAAgYgLgAqbFhQg7gIgtgqIgngpQgXgYgUgKQgfgRg4gHQjFgbjSgFQBOiCCPimIBWAAQgdAWAHAZQAHAYARAMQASAMAbADQALACAlACIC2ADQBKACAqALQA+AQAdAqQAPAWAHAiQAEAWACAnQADA0gGAfQgHAtgaAaQgfAggxAAQgLAAgMgCgAJfEOQgpgigigBQghAAg2AVQg2AWgXABQgmADgfgIQglgJAHgYQAHgYACgcQADgcAHgIQAHgJALgBQAMgBB/gDQB/gDD0gMQCZgJBggQQCHgYBlgzQANAPATAbQASAbgDAWQgEAXheA1QheA1iWATQiVAShoALQgaADgWAAQhDAAgfgZgAjqDdQgJgEgQgJQgZgPgGgLQgKgPAAgdQAAgVAEgYQAGghAXgbQAQgUAWgMQAwABAXACQAnAFAcAOQAQALAEAGQAEAMgHARQgGARgRAZQgWAegFAJIgJATIgKASQgLALgRALQgUANgPADIgGAAQgKAAgMgEgAMygkQgcgGgcgLQgdgLgSgmQgSgngIgMQgIgNgVgCQgOgCgYABIgmAAQgWgCgPgIQgRgIgJgTQgKgTAJgQQAMgdA9AAIBVACQAwADAkAGQAvAJBeAXQBQAOA2gWQAGAJAMAHIAVAJQAeAQgFAUQgBALgUANQgUALhBAWQg3ATgbAVIgUATQgMALgLAFQgQAIgSAAQgJAAgJgCgADXoMIgbgHQgLgEgMgIIgUgNQgfgXgIgSQAIgPAJADIAPAFQAGADALAAIATAAQALAAAQADIAcAGIAfACIAyAHQAfAEATAAQADAOgIAOQgHANgNAIQgWALgiAAQgnAAgZgFg");
	this.shape_4.setTransform(156,60.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Shrub Green
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808157").s().p("AxckUQHRnRKPAAQKRAAHQHRQGGGFA/IOQnEhOmigeQgNgmhfhaQhghbiyADQiyAEh8B8QhDBFgOAjQqJALqKCHIh3AZIgCABIgHABIgQAEIhNASQAipQGrmqg");
	this.shape_5.setTransform(158.6,74.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Top, new cjs.Rectangle(-1,-1,317.6,150.3), null);


(lib.Middle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AYmjIQALBkAABnQAAAqgBAoA4lDJQgLhhAAhlQAAgyADgz");
	this.shape.setTransform(158.5,52.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAUEuQhChDgziXQofAPlRBFQhfAdhGAFIh5AYQiaAhicAoQgLhgAAhlQAAg0ADgyIBMgRIAQgDIAIgCIACAAIB2gaQKLiHKJgKQAOgkBDhFQB8h8CygDQCygEBgBbQBfBbANAlQGiAeHDBPQAMBjAABoQAAApgBApQmmhEmjgvQgbC8huBVQhuBViwAAQiwAAh8h9g");
	this.shape_1.setTransform(158.5,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Middle, new cjs.Rectangle(-1,0,319,85.3), null);


(lib.Bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AYrq1QmmhEmigvQgcC8huBVQhuBViwAAQiwAAh8h9QhChDgziXQoeAPlSBFQheAdhHAFIh4AYQibAhicAoQA9ITGIGHQHRHRKQAAQKQAAHQnRQCqiqBtjEQCnkwARlvg");
	this.shape.setTransform(157.9,80.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AxlFYQmImHg9oTQCcgoCbghIB4gYQBHgFBegdQFShFIegPQAzCXBCBDQB8B9CwAAQCwAABuhVQBuhVAci8QGiAvGmBEQgRFvinEwQhtDEiqCqQnQHRqQAAQqQAAnRnRg");
	this.shape_1.setTransform(157.9,80.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bottom, new cjs.Rectangle(-1,-1,317.8,163.8), null);


(lib.BallShine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0)").s().p("Ai7FFQiIgOgohpQgphpBOiGQBOiGCWhVQCVhWCIAOQCIAOApBpQApBohOCGQhOCHiXBVQiABKh3AAQgTAAgTgCg");
	this.shape.setTransform(37.8,32.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BallShine, new cjs.Rectangle(0,0,75.6,65.4), null);


(lib.BallShadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("AwJGVQmImJg9oRIAKgDQgKhdAAhgQAAg0ACg8IBEgPIAdgHIB8gZQgXD5DHALIAggHQBHgFBegdUAKoAgqAahgV7QhtDEiqCrQnQHQqRAAQqPAAnRnQg");
	this.shape.setTransform(148.7,86.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BallShadow, new cjs.Rectangle(0,-0.8,297.4,173.8), null);


(lib.Shades1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thug();
	this.instance.parent = this;
	this.instance.setTransform(-512,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Shades1, new cjs.Rectangle(-512,-118,1024,228), null);


(lib.pivot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0)").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape.setTransform(12.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.pivot, new cjs.Rectangle(5,5,15,15), null);


(lib.SadMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouth Edge
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiDAKQAEABAEACQAIACAHABQAGABAFgBQAIAAAHgDQAogNAjgIQAygOAdAGQAaAHAiAc");
	this.shape.setTransform(-97,-185.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Mouth Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AldDAQiPhfgqhPIAZgXQARgQA/hJQA/hJAngYQAogZCEgIQCEgIAzABQA1ABBMAqQBMApAYAYQAYAXA5AXQA5AXAVAPIApAeQAVANA5BBQgRAWgfAIIg6ARQgaAIhUgPQhTgQg4ggQg5gfikCAQhfBKhYAAQhBAAg8gog");
	mask.setTransform(-7.3,-175.9);

	// Mouth Outline
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AoPARQAnBMCNBeQCNBeCliAQCkiAA5AgQA5AgBRAPQBSAPAZgJQAZgIAhgJQAhgJAMgRQg7g9gQgMQgVgPgUgQQgVgPg6gXQg6gXgYgXQgYgXhMgpQhNgpg3AAQg2ABh7AIQh7AHgpAXQgoAXhABLQg/BKgSAOQgRANgDAFg");
	this.shape_1.setTransform(-7.4,-175.8);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Mouth Shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.498)").s().p("AEcBoQjrivkmCnQkmCpgihxQghhwCYh+QCYiAEhg0QEgg0CYC0QCXCyABB3QABB3geAAIAAAAQgfABjrivg");
	this.shape_2.setTransform(-9.8,-180.4);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Tongue
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AG3AHQgICah+BuQh+BviyAAQixAAh+hvQh+hugKidQgKibCFhwQCEhvDTgGQDTgGBoB4QBoB4gICZg");
	this.shape_3.setTransform(-11.5,-141.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9999").s().p("AkuEPQh+hugKidQgKibCFhwQCEhvDTgGQDTgGBoB4QBoB4gICZQgICah+BuQh+BviyAAQixAAh+hvg");
	this.shape_4.setTransform(-11.5,-141.4);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Inside Mouth
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AIyAAQAACZikBsQilBtjpAAQjoAAilhtQikhsAAiZQAAiZCkhsQClhsDoAAQDpAAClBsQCkBsAACZg");
	this.shape_5.setTransform(-8.1,-166.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990033").s().p("AmNEGQikhtAAiZQAAiYCkhtQClhsDoAAQDpAAClBsQCkBtAACYQAACZikBtQilBsjpAAQjoAAilhsg");
	this.shape_6.setTransform(-8.1,-166.9);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SadMouth, new cjs.Rectangle(-111.1,-199.1,157.3,46.4), null);


(lib.OpenMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouth Edge
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiDAKQAEABAEACQAIACAHABQAGABAFgBQAIAAAHgDQAogNAjgIQAygOAdAGQAaAHAiAc");
	this.shape.setTransform(-97,-185.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Mouth Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjvDnQhvgqhCg0QhCg1gihUIADgGQAWgiA2g2QBDhDBEgqQBCgrB+gKQB9gJBCAPQBCAQA+AcQA9AcAdAZQAdAZAmAcIA6ArIAnAfQAUAPAiAbQgEANgJASQgJASgiAgQghAgh1A0Qh2A1ihAUQgyAGgvAAQhiAAhMgdg");
	mask.setTransform(-8.7,-174.5);

	// Mouth Outline
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AoAAEQAmBOA+AzQA/A0BMAeQCMA5CvgXQCTgSCnhKQBMggAmgoQAVgXAPgbQAEgJADgJQgagVgUgPQgUgQgVgPQgVgPglgdQglgcgdgZQgegYg+gcQg+gdhBgQQhBgRh8AKQh9AJhDArQhDAqhEBDQg2A2gWAiQgBACgCAEg");
	this.shape_1.setTransform(-8.8,-174.5);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Mouth Shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.498)").s().p("AEHCDQkKiTkhCiQkgCigIiGQgIiGCYh+QCYiAEhg0QEgg0CYC0QCXCyABB3QABB3geAAIgBAAQgeAAkKiTg");
	this.shape_2.setTransform(-10.8,-180.4);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Tongue
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AG3AHQgICah+BuQh+BviyAAQixAAh+hvQh+hugKidQgKibCFhwQCEhvDTgGQDTgGBoB4QBoB4gICZg");
	this.shape_3.setTransform(-11.5,-141.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9999").s().p("AkuEPQh+hugKidQgKibCFhwQCEhvDTgGQDTgGBoB4QBoB4gICZQgICah+BuQh+BviyAAQixAAh+hvg");
	this.shape_4.setTransform(-11.5,-141.4);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Inside Mouth
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AIyAAQAACZikBsQilBtjpAAQjoAAilhtQikhsAAiZQAAiZCkhsQClhsDoAAQDpAAClBsQCkBsAACZg");
	this.shape_5.setTransform(-8.1,-166.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990033").s().p("AmNEGQikhtAAiZQAAiYCkhtQClhsDoAAQDpAAClBsQCkBtAACYQAACZikBtQilBsjpAAQjoAAilhsg");
	this.shape_6.setTransform(-8.1,-166.9);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.OpenMouth, new cjs.Rectangle(-111.1,-200.5,154.2,52.1), null);


(lib.HeadShine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFBFQgggYgVglQgWglACgcQADgcAZgEQAZgDAfAYQAhAZAVAlQAWAkgDAcQgCAdgZADIgGAAQgXAAgcgVg");
	this.shape.setTransform(7.9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HeadShine, new cjs.Rectangle(0,0,15.8,18.1), null);


(lib.Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AtVGMQAPgmADiiQADihCcjOQCCisCehOQAfgPAggMIDDgvQA5gHA9gCQCagGCDAnQAPAEAOAFQAfAKAdANICnBnQA3AuAxA7QAaAfBlCPQBRByAMClQACAngBApQgDB0gKBY");
	this.shape.setTransform(85.4,50.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AhpJUQhQgOhBg3QhBg3gkhLQgYgYgOgKQgXgPgWgCQgJgBgPACIgXACQgeADgdgMQgcgKgXgVQgigdgagGQgdgHgyAOQgjAJgpAOIgOADIgLAAQgIgBgKgDIgEgCQAPgmADiiQADigCcjPQCCisCehOQAfgPAggMIDDgvQA5gHA9gCQCagGCDAnIAdAJQAfAKAdANICnBnQA3AuAxA7QAaAfBlCPQBRBzAMCkQACAngBApQgDB0gKBYIgCgBQgFgDgGgBQgJgBgLADIgBAAQgRAEgTALQgJAFgUADQgUAEgMAFQgLAFgsAZQgsAZhQgCQhRgBgmgdIhAgzQgYgQgWgBQgigCggAfQgGAHgtA5QgyA/hQAeQg2AUg1AAQgbAAgagFg");
	this.shape_1.setTransform(85.4,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Head, new cjs.Rectangle(-1,-1,172.9,121.2), null);


(lib.HalfOpenMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouth Edge
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiDAKQAEABAEACQAIACAHABQAGABAFgBQAIAAAHgDQAogNAjgIQAygOAdAGQAaAHAiAc");
	this.shape.setTransform(-97,-185.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Mouth Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjxCoQhugrhBg1QhCg1glhKQBiA5BaALQBbALBDgdQBCgfA3gyQA1gxAlgZQAmgaA0gHQA1gIAjAPQAkAPAiAlQAhAlAaASQAZARAvAMQAvAMA4gLQgNArglAjQgkAlh7A0Qh8A1ifAUQgyAGgtAAQhjAAhLgdg");
	mask.setTransform(-8.9,-168.2);

	// Mouth Outline
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AoDgxQBXA5BfALQBoAMBVgvQAjgTAzgrQA+g0AVgOQAwgiAxgLQA5gMAsAXQAYANAdAcQArAsAEAEQAqAiA2AMQAtAJA0gKQgQAmgdAdQgmAphMAgQinBJiTATQiuAWiNg5QhLgeg/g0Qg/gzgqhFg");
	this.shape_1.setTransform(-9,-168.3);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Mouth Shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.498)").s().p("AIwEDIksifQkLiNkiCfQkjCfgCh3QgDh3CwhdQCwhdEIhVQEKhVCXCyQCXCyABB3QAABngYAAQgEAAgEgCg");
	this.shape_2.setTransform(-11,-171.5);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Tongue
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AG3AHQgICah+BuQh+BviyAAQixAAh+hvQh+hugKidQgKibCFhwQCEhvDTgGQDTgGBoB4QBoB4gICZg");
	this.shape_3.setTransform(-11.5,-141.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9999").s().p("AkuEPQh+hugKidQgKibCFhwQCEhvDTgGQDTgGBoB4QBoB4gICZQgICah+BuQh+BviyAAQixAAh+hvg");
	this.shape_4.setTransform(-11.5,-141.4);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Inside Mouth
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AIyAAQAACZikBsQilBtjpAAQjoAAilhtQikhsAAiZQAAiZCkhsQClhsDoAAQDpAAClBsQCkBsAACZg");
	this.shape_5.setTransform(-8.1,-166.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990033").s().p("AmNEGQikhtAAiZQAAiYCkhtQClhsDoAAQDpAAClBsQCkBtAACYQAACZikBtQilBsjpAAQjoAAilhsg");
	this.shape_6.setTransform(-8.1,-166.9);

	var maskedShapeInstanceList = [this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.HalfOpenMouth, new cjs.Rectangle(-111.1,-188.4,154.2,39.9), null);


(lib.FrontEar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgqEZQgEgKgFgKQgHgSgHgTQgOgpgJgwQgIgrgFgyQgNiBAVhfQAVheArgEQAlgDAkBKQADAHADAHQAnBZANCBQADAiABAfQADBZgQBGQgBAFgCAG");
	this.shape.setTransform(10.7,28.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AgzEFIgOglQgOgpgJgwQgIgrgFgyQgNiBAVhfQAVheArgEQAlgDAkBKIAGAOQAnBZANCBQADAiABAfQADBZgQBGIgDALIiEAXIgJgUg");
	this.shape_1.setTransform(10.7,28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FrontEar1, new cjs.Rectangle(-1,-1,23.4,58.2), null);


(lib.FrontEar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhoEIQgCgLgBgKQgGgpAAguQAAgQABgQQACgyAKg4QAWiAAshWQAkhHAkgHQAHgCAHABQAqAHAOBgQAPBggWCAQgRBlgfBKQgIAVgKATQgDAEgDAF");
	this.shape.setTransform(11.4,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AhoEIIgDgVQgGgpAAguIABggQACgyAKg4QAWiAAshWQAkhHAkgHQAHgCAHABQAqAHAOBgQAPBggWCAQgRBlgfBKQgIAVgKATIgGAJg");
	this.shape_1.setTransform(11.4,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FrontEar2, new cjs.Rectangle(-1,-1,24.9,57.3), null);


(lib.Foot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AO+lTQgJBNgOA2QggA0AFBEQAEA1AeBBQAkBKAJAqQAQBCgbAuQgiA6hbAJQggAEgygCQg4gCgaAAQhJAAhdAYQgkAJh/ApQhkAgg+ALQhaAPhLgNQg8gKh2g1Qh0gzhBgKQg+gIhOAMQgrAGhiAXQi3AshggUQhJgRgXguQgWgyAphGQAYgqAvg3QAbgeA2g9QBehuAChtQgXhAAEis");
	this.shape.setTransform(99.3,47.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC99FF").s().p("AAfHLQg8gLh2g0Qh0g0hBgJQg+gJhOAMQgrAGhiAYQi3ArhggUQhJgRgXgtQgWgyAphGQAYgqAvg3IBRhcQBehuAChtQgXhAAEisIAFACQAJADAIABIALAAIAOgDQApgNAjgJQAygOAdAGQAbAHAhAdQAYAUAcALQAdALAdgDIAYgCQAOgCAKACQAWABAWAQQAPAKAYAYQAkBKBBA4QBBA3BOAOQBRAOBQgdQBQgeAzhAQAsg5AHgGQAgggAiADQAVAAAYARIAoAfQA8AuBAgnQBAgnAzAAQA0gBAQAcQAQAcAcgVQAYgRAJgFQATgMARgEQAVgFAMAIQgJBNgOA3QggA0AFBEQAEA1AeBBQAkBJAJAqQAQBDgbAtQgiA6hbAKQggADgygBIhSgCQhJgBhdAYQgkAKh/AoQhkAgg+ALQgxAJgsAAQgmAAgigGg");
	this.shape_1.setTransform(99.3,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Foot, new cjs.Rectangle(-1,0,200.6,94), null);


(lib.Eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AClA3QgHgWAAghQAAgfAHgYQAIgXAKAAQALAAAHAXQAHAYAAAfQAAAhgHAWQgHAXgLAAQgKAAgIgXgAjIA3QgHgWAAghQAAgfAHgYQAHgXALAAQAKAAAHAXQAIAYAAAfQAAAhgIAWQgHAXgKAAQgLAAgHgXg");
	this.shape.setTransform(20.8,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Eyes, new cjs.Rectangle(0,0,41.7,15.7), null);


(lib.ClosedMouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AtOiHQACABADABQAKADAIABQAFABAGgBQAHgBAHgCQApgNAjgJQAygOAdAGQAaAHAiAdQAXAUAcALQAdALAegDQAFAAASgCQAPgCAJACQAWABAXAQQAOAKAYAYQAkBJBBA4QBBA3BQAOQBRAOBPgdQBQgeAyhAQAtg4AHgGQAfggAjADQAVAAAYARQAbAVANAJQA8AuBPAHQBGAGBZgkQABAAACAAQAWAAAcgVQAYgQAJgFQATgMARgEQAUgFALAI");
	this.shape.setTransform(84.7,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClosedMouth, new cjs.Rectangle(-1,-1,171.4,35), null);


(lib.Cheek2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABei4QgdgggWgJQgWgJgWAFQgqALgZAtQgSAkgEAzQgHAyACBAQACBMAYAxQADAFACAFQATAgAdAUQAeAVAtgGQAvjDgMjbg");
	this.shape.setTransform(9.7,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC66").s().p("AgQDXQgdgUgTggIgFgKQgYgxgChMQgChAAHgyQAEgzASgkQAZgtAqgLQAWgFAWAJQAWAJAdAgQAMDbgvDDIgUABQggAAgXgQg");
	this.shape_1.setTransform(9.7,23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cheek2, new cjs.Rectangle(-1,-1,21.4,48.3), null);


(lib.Cheek1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ah/AeQgHg+AOg8QAThQAwgcQAvgcAzAlQAzAlAXBTQAWBSgVBQQgDAOgFANQgUA5gqAZQgyAdgzglQgzglgShVQgFgUgCgUg");
	this.shape.setTransform(13.1,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC66").s().p("AgzDAQgzglgShVQgFgUgCgUQgHg+AOg8QAThQAwgcQAvgcAzAlQAzAlAXBTQAWBSgVBQIgIAbQgUA5gqAZQgWANgXAAQgbAAgdgVg");
	this.shape_1.setTransform(13.1,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cheek1, new cjs.Rectangle(-1,-1,28.1,44.6), null);


(lib.BodyShadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.447)").s().p("AlYMMQgcglALgzQAKgzBchaQBbhbAohDQAnhEgEiBQgChLgOiVQgGjyCDjaQCEjaDahrQiDCFiKDNQiKDNgRCkQgSCiAUCsQARCXgNBWQgPBog4BcQg5BdhWA8IgIAAQgsAAgagig");
	this.shape.setTransform(36.5,81.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BodyShadow, new cjs.Rectangle(0,0,73.1,162.8), null);


(lib.BackEar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhsFsQgDgNgBgPQgUh9AUitQATisAwh3QAth3AvAGQAvAGAUB+QATB9gTCtQgUCsgvB3QgDAGgDAG");
	this.shape.setTransform(12.3,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("AhsFrIgEgdQgUh9AUitQATirAwh3QAth3AvAGQAvAFAUB+QATB+gTCsQgUCtgvB2IgGANIgMgBQgTgBgkAFIgLAAQgbAAgsgGg");
	this.shape_1.setTransform(12.3,36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BackEar2, new cjs.Rectangle(-1,-1,26.7,75.5), null);


(lib.BackEar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgwGhQgFgOgGgPQgziFgTjBQgSjBAZiMQAYiMA3gFQA0gFAzCEQAzCGATDAQASDBgZCMQgBAIgCAI");
	this.shape.setTransform(13.8,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCFF").s().p("Ag7GEQgziFgSjBQgTjBAZiMQAYiMA2gFQA1gFAzCEQAzCGATDAQASDBgZCMIgDAQIgPACQgVADgoAOQgfAIg8AEIgMgdg");
	this.shape_1.setTransform(13.8,41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BackEar1, new cjs.Rectangle(-1,-1,29.5,85.4), null);


(lib.Beam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.dispatchEvent('caught');
	}
	this.frame_18 = function() {
		this.dispatchEvent('drop');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(10).call(this.frame_18).wait(1));

	// Beam
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.498)").s().p("AgPAGQiNhlgbgjQAFgFBUA5QBUA6BIAtQBHAuAQAIQAPAIANAOQAMANgJARQg3gYiMhlg");
	this.shape.setTransform(206.6,-160.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(179,51,51,0.525)").s().p("AgTAHQi2iBgigtQAGgHBtBKQBsBKBcA6QBcA7AUAKQATALARARQAQASgNAWQhGgfi0iDg");
	this.shape_1.setTransform(211.9,-156.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,0,0.549)").s().p("AgYAJQjeiegqg3QAIgJCEBaQCEBbBxBHQBwBIAZANQAXANAVAVQATAVgPAbQhWgmjcifg");
	this.shape_2.setTransform(217.2,-153.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.576)").s().p("AgLBrQkLlHgrg4QAIgJCSBIQCRBICXASQCYASAbgDQAagDgWBaQgXBaAHBAQgUCRhIAAQhOAAiJirg");
	this.shape_3.setTransform(220.4,-146);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.6)").s().p("AgQCpQk4nwgrg5QAIgJCeA2QCfA1C9gkQC/gkAdgUQAdgThBCfQhBCgAdBlQACFrhiAAQhNAAiGjZg");
	this.shape_4.setTransform(225.5,-135.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.624)").s().p("Ag4E+Ql4orgnhSQAIgJC5ASQC5ASC8h7QC9h6BfgYQBfgYgCEQQgBEPgjDVQhBGJiSAAQh0AAilj2g");
	this.shape_5.setTransform(235.5,-141.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,0,0.647)").s().p("AiCHWQm4pmgkhqQAIgKDUgSQDTgSC6jRQC8jRChgbQChgcA+F/QA+GAhjFEQiDGmjBAAQicAAjEkSg");
	this.shape_6.setTransform(248.9,-148.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,0,0,0.675)").s().p("AjSHaQnNpngkhrQAIgJDUgSQDTgSC7jRQC7jRDngvQDngvBhGVQBhGThaGLQjbFujoAAQjPAAjYkig");
	this.shape_7.setTransform(259,-148.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,0,0,0.698)").s().p("AkmHdQnhpogjhqQAIgJDTgSQDUgSC7jRQC7jREthDQEthCCEGqQCEGohRHSQkpE2kNAAQkMgBjwkzg");
	this.shape_8.setTransform(269.4,-149.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,0,0,0.525)").s().p("AgTAHQi2iBgigtQAGgHBtBKQBsBKBcA6QBcA7AUAKQATALARARQAQASgNAWQhGgfi0iDg");
	this.shape_9.setTransform(211.9,-156.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,0,0,0.498)").s().p("AgPAGQiNhlgbgjQAFgFBUA5QBUA6BIAtQBHAuAQAIQAPAIANAOQAMANgJARQg3gYiMhlg");
	this.shape_10.setTransform(206.6,-160.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,0,0,0.624)").s().p("AgIADQhPg6gPgVQADgDAvAiQAvAiAoAaQAoAbAIAEQAJAFAHAIQAHAIgFAKQgfgOhOg8g");
	this.shape_11.setTransform(198.5,-166);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,0,0,0.749)").s().p("AgBABQgRgRgDgGQABgBAKAKIARASIALAJIADAEQABACgBADQgGgEgQgSg");
	this.shape_12.setTransform(190.4,-171.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(188.2,-173.7,36.8,26.3);


(lib.pokePuff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993366").ss(3,1,1).p("Ah3hEIB4BEIAACMAh3hEIB4hHIB3BGIh3BFAh3hEIAACIIB4BIAB4hFIAACLIh3BG");
	this.shape.setTransform(-1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ah3ABIB4hGIB3BGIh3BFg");
	this.shape_1.setTransform(-1,-7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED6663").s().p("Ag7AhIAAiJIB3BFIAACMg");
	this.shape_2.setTransform(-6.9,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A13E52").s().p("Ag7giIB2hGIAACKIh2BHg");
	this.shape_3.setTransform(5.1,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pokePuff, new cjs.Rectangle(-14.5,-15.8,27,31), null);


(lib.level = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Background
	this.instance = new lib.battleBackground();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.784,0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egq4AfQMAAAg+fMBVxAAAMAAAA+fg");
	this.shape.setTransform(274.5,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.level, new cjs.Rectangle(0,0,549,400.2), null);


(lib.Music3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.secretBtn2 = new lib.SecretBtn2();
	this.secretBtn2.name = "secretBtn2";
	this.secretBtn2.parent = this;
	this.secretBtn2.setTransform(8,4.7,0.163,0.163);
	new cjs.ButtonHelper(this.secretBtn2, 0, 1, 2, false, new lib.SecretBtn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.secretBtn2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Music3, new cjs.Rectangle(0,0,20.5,20.4), null);


(lib.Music2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.secretBtn1 = new lib.SecretBtn1();
	this.secretBtn1.name = "secretBtn1";
	this.secretBtn1.parent = this;
	this.secretBtn1.setTransform(11,7,0.159,0.159);
	new cjs.ButtonHelper(this.secretBtn1, 0, 1, 2, false, new lib.SecretBtn1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.secretBtn1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Music2, new cjs.Rectangle(0,0,21,21), null);


(lib.ActionsBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Buttons
	this.run = new lib.Run_btn();
	this.run.name = "run";
	this.run.parent = this;
	this.run.setTransform(513.2,391.1,0.91,0.91);
	new cjs.ButtonHelper(this.run, 0, 1, 2, false, new lib.Run_btn(), 3);

	this.food = new lib.Bait_btn();
	this.food.name = "food";
	this.food.parent = this;
	this.food.setTransform(511.6,364.2,0.88,0.88);
	new cjs.ButtonHelper(this.food, 0, 1, 2, false, new lib.Bait_btn(), 3);

	this.rock = new lib.Rock_Btn();
	this.rock.name = "rock";
	this.rock.parent = this;
	this.rock.setTransform(406.9,391.1,0.878,0.878);
	new cjs.ButtonHelper(this.rock, 0, 1, 2, false, new lib.Rock_Btn(), 3);

	this.ball = new lib.Ball_btn();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(406.7,364,0.875,0.875);
	new cjs.ButtonHelper(this.ball, 0, 1, 2, false, new lib.Ball_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ball},{t:this.rock},{t:this.food},{t:this.run}]}).wait(1));

	// Grey Outline/Fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AvtkXIfbAAIAAIvI/bAAg");
	this.shape.setTransform(439.9,362.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvsEYIAAovIfaAAIAAIvg");
	this.shape_1.setTransform(439.9,362.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Purple Outline
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6633CC").ss(3,1,1).p("Av+koIf+AAIAAJRI/+AAg");
	this.shape_2.setTransform(439.8,362.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Lavendar Outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#9999F0").ss(1,1,1).p("AwRk7MAgkAAAIAAJ3MggkAAAg");
	this.shape_3.setTransform(439.8,362.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Black Outline
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AQllKIAAKVMghJAAAIAAqVg");
	this.shape_4.setTransform(439.9,362);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ActionsBox, new cjs.Rectangle(332.4,327.4,215.1,69.3), null);


(lib.holidays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Button
	this.holidayBtn = new lib.HolidayBtn();
	this.holidayBtn.name = "holidayBtn";
	this.holidayBtn.parent = this;
	this.holidayBtn.setTransform(8.7,29.5,0.7,0.7);
	new cjs.ButtonHelper(this.holidayBtn, 0, 1, 2, false, new lib.HolidayBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.holidayBtn).wait(25));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A9cAjIAAhFMA65AAAIAABFg");
	var mask_graphics_1 = new cjs.Graphics().p("A9cBaIAAizMA65AAAIAACzg");
	var mask_graphics_2 = new cjs.Graphics().p("A9cCRIAAkhMA65AAAIAAEhg");
	var mask_graphics_3 = new cjs.Graphics().p("A9cDHIAAmNMA65AAAIAAGNg");
	var mask_graphics_4 = new cjs.Graphics().p("A9cD+IAAn7MA65AAAIAAH7g");
	var mask_graphics_5 = new cjs.Graphics().p("A9cE1IAAppMA65AAAIAAJpg");
	var mask_graphics_6 = new cjs.Graphics().p("A9cFsIAArXMA65AAAIAALXg");
	var mask_graphics_7 = new cjs.Graphics().p("A9cGjIAAtFMA65AAAIAANFg");
	var mask_graphics_8 = new cjs.Graphics().p("A9cHaIAAuzMA65AAAIAAOzg");
	var mask_graphics_9 = new cjs.Graphics().p("A9cIRIAAwhMA65AAAIAAQhg");
	var mask_graphics_10 = new cjs.Graphics().p("A9cJIIAAyPMA65AAAIAASPg");
	var mask_graphics_11 = new cjs.Graphics().p("A9cJ+IAAz7MA65AAAIAAT7g");
	var mask_graphics_12 = new cjs.Graphics().p("A9cK1IAA1pMA65AAAIAAVpg");
	var mask_graphics_13 = new cjs.Graphics().p("A9cLsIAA3XMA65AAAIAAXXg");
	var mask_graphics_14 = new cjs.Graphics().p("A9cMjIAA5FMA65AAAIAAZFg");
	var mask_graphics_15 = new cjs.Graphics().p("A9cNaIAA6zMA65AAAIAAazg");
	var mask_graphics_16 = new cjs.Graphics().p("A9cORIAA8hMA65AAAIAAchg");
	var mask_graphics_17 = new cjs.Graphics().p("A9cPIIAA+OMA65AAAIAAeOg");
	var mask_graphics_18 = new cjs.Graphics().p("A9cP+IAA/7MA65AAAIAAf7g");
	var mask_graphics_19 = new cjs.Graphics().p("A9cQ1MAAAghpMA65AAAMAAAAhpg");
	var mask_graphics_20 = new cjs.Graphics().p("A9cRsMAAAgjXMA65AAAMAAAAjXg");
	var mask_graphics_21 = new cjs.Graphics().p("A9cSjMAAAglFMA65AAAMAAAAlFg");
	var mask_graphics_22 = new cjs.Graphics().p("A9cTaMAAAgmzMA65AAAMAAAAmzg");
	var mask_graphics_23 = new cjs.Graphics().p("A9cURMAAAgogMA65AAAMAAAAogg");
	var mask_graphics_24 = new cjs.Graphics().p("A9cVHMAAAgqNMA65AAAMAAAAqNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-5.5,y:-83.5}).wait(1).to({graphics:mask_graphics_1,x:-5.5,y:-78}).wait(1).to({graphics:mask_graphics_2,x:-5.5,y:-72.5}).wait(1).to({graphics:mask_graphics_3,x:-5.5,y:-67}).wait(1).to({graphics:mask_graphics_4,x:-5.5,y:-61.5}).wait(1).to({graphics:mask_graphics_5,x:-5.5,y:-56}).wait(1).to({graphics:mask_graphics_6,x:-5.5,y:-50.5}).wait(1).to({graphics:mask_graphics_7,x:-5.5,y:-45}).wait(1).to({graphics:mask_graphics_8,x:-5.5,y:-39.5}).wait(1).to({graphics:mask_graphics_9,x:-5.5,y:-34}).wait(1).to({graphics:mask_graphics_10,x:-5.5,y:-28.5}).wait(1).to({graphics:mask_graphics_11,x:-5.5,y:-23}).wait(1).to({graphics:mask_graphics_12,x:-5.5,y:-17.5}).wait(1).to({graphics:mask_graphics_13,x:-5.5,y:-12}).wait(1).to({graphics:mask_graphics_14,x:-5.5,y:-6.5}).wait(1).to({graphics:mask_graphics_15,x:-5.5,y:-1}).wait(1).to({graphics:mask_graphics_16,x:-5.5,y:4.5}).wait(1).to({graphics:mask_graphics_17,x:-5.5,y:10}).wait(1).to({graphics:mask_graphics_18,x:-5.5,y:15.5}).wait(1).to({graphics:mask_graphics_19,x:-5.5,y:21}).wait(1).to({graphics:mask_graphics_20,x:-5.5,y:26.5}).wait(1).to({graphics:mask_graphics_21,x:-5.5,y:32}).wait(1).to({graphics:mask_graphics_22,x:-5.5,y:37.5}).wait(1).to({graphics:mask_graphics_23,x:-5.5,y:43}).wait(1).to({graphics:mask_graphics_24,x:-5.5,y:48.5}).wait(1));

	// Happy
	this.instance = new lib.Y_1();
	this.instance.parent = this;
	this.instance.setTransform(95,-9.9,1,1,0,0,0,-1,0);

	this.instance_1 = new lib.P_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(53,-9.9,1,1,0,0,0,-2.5,-3);

	this.instance_2 = new lib.P_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.5,-9.9,1,1,0,0,0,-2.5,-3);

	this.instance_3 = new lib.A_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-31,-12.9,1,1,0,0,0,-2,-3);

	this.instance_4 = new lib.H_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-81,-9.9,1,1,0,0,0,-1,-2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(25));

	// Safari
	this.instance_5 = new lib.I_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(116,64.1,1,1,0,0,0,-1,-2);

	this.instance_6 = new lib.R_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80,67.1,1,1,0,0,0,-1,-1);

	this.instance_7 = new lib.A_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(34,65.1,1,1,0,0,0,-2,-3);

	this.instance_8 = new lib.F_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-11,61.1,1,1,0,0,0,-1,-3);

	this.instance_9 = new lib.A_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-62,63.1,1,1,0,0,0,-2,-3);

	this.instance_10 = new lib.S_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-111,64.1,1,1,0,0,0,-1,-4);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(25));

	// Day
	this.instance_11 = new lib.Y_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(52.5,133.1,1,1,0,0,0,-1,0);

	this.instance_12 = new lib.A_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(1.5,130.1,1,1,0,0,0,-2,-3);

	this.instance_13 = new lib.D_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-45.5,132.1,1,1,0,0,0,1,-2);

	var maskedShapeInstanceList = [this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.2,-31.2,264.1,189.3);


(lib.Rock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// shades
	this.shade = new lib.Shades1();
	this.shade.name = "shade";
	this.shade.parent = this;
	this.shade.setTransform(0,-13,0.276,0.276,0,15,-165,0.4,-4.4);

	this.timeline.addTween(cjs.Tween.get(this.shade).wait(1));

	// Layer_1
	this.instance = new lib.Geodude();
	this.instance.parent = this;
	this.instance.setTransform(-130,-131);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rock, new cjs.Rectangle(-144.8,-131,289.7,256), null);


(lib.shadeSlider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(132).call(this.frame_132).wait(1));

	// Layer_1
	this.shades = new lib.Shades1();
	this.shades.name = "shades";
	this.shades.parent = this;
	this.shades.setTransform(-6.4,-0.7,0.075,0.075,0,0,0,0,-4);

	this.timeline.addTween(cjs.Tween.get(this.shades).to({y:117.2},132).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-9.3,77.1,17.2);


(lib.Pokeball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1));

	// Effects
	this.ballShine = new lib.BallShine();
	this.ballShine.name = "ballShine";
	this.ballShine.parent = this;
	this.ballShine.setTransform(-86.9,-94.4,1,1,0,0,0,37.8,32.6);

	this.ballShadow = new lib.BallShadow();
	this.ballShadow.name = "ballShadow";
	this.ballShadow.parent = this;
	this.ballShadow.setTransform(-11.1,76.6,1,1,0,0,0,148.7,86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ballShadow},{t:this.ballShine}]}).to({state:[{t:this.ballShadow},{t:this.ballShine}]},5).to({state:[{t:this.ballShadow},{t:this.ballShine}]},5).wait(1));

	// Button
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ADrAAQAABhhGBFQhEBFhhAAQhgAAhGhFQhEhFAAhhQAAhgBEhGQBGhEBgAAQBhAABEBEQBGBGAABgg");
	this.shape.setTransform(30.5,-5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AEwAAQAAB+hZBZQhZBZh+AAQh8AAhahZQhZhZAAh+QAAh8BZhaQBahZB8AAQB+AABZBZQBZBaAAB8g");
	this.shape_1.setTransform(30.4,-5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjWDXQhZhZAAh+QAAh8BZhaQBahZB8AAQB+AABYBZQBaBaAAB8QAAB+haBZQhYBZh+AAQh8AAhahZgAjqAAQAABgBFBFQBFBFBgAAQBiAABEhFQBFhFAAhgQAAhhhFhFQhEhFhiAAQhgAAhFBFQhFBFAABhIAAAAgAilClQhFhFAAhgQAAhhBFhFQBFhFBgAAQBiAABEBFQBFBFAABhQAABghFBFQhEBFhiAAQhgAAhFhFgADrAAIAAAAg");
	this.shape_2.setTransform(30.4,-5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AkvAAQAAh8BZhaQBahZB8AAQB+AABZBZQBZBaAAB8QAAB+hZBZQhZBZh+AAQh8AAhahZQhZhZAAh+g");
	this.shape_3.setTransform(30.4,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AjqAAQAAhgBEhGQBGhEBgAAQBhAABEBEQBGBGAABgQAABhhGBFQhEBFhhAAQhgAAhGhFQhEhFAAhhg");
	this.shape_4.setTransform(30.5,-5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,204,204,0.949)").s().p("AjWDXQhZhZAAh+QAAh8BZhaQBahZB8AAQB+AABYBZQBaBaAAB8QAAB+haBZQhYBZh+AAQh8AAhahZgAilClQBFBFBgAAQBiAABEhFQBFhFAAhgQAAhhhFhFQhEhFhiAAQhgAAhFBFQhFBFAABhQAABgBFBFgAilClQhFhFAAhgQAAhhBFhFQBFhFBgAAQBiAABEBFQBFBFAABhQAABghFBFQhEBFhiAAQhgAAhFhFgAjqAAIAAAAg");
	this.shape_5.setTransform(30.4,-5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,153,153,0.898)").s().p("AjWDXQhZhZAAh+QAAh8BZhaQBahZB8AAQB+AABYBZQBaBaAAB8QAAB+haBZQhYBZh+AAQh8AAhahZgAilClQBFBFBgAAQBiAABEhFQBFhFAAhgQAAhhhFhFQhEhFhiAAQhgAAhFBFQhFBFAABhQAABgBFBFgAilClQhFhFAAhgQAAhhBFhFQBFhFBgAAQBiAABEBFQBFBFAABhQAABghFBFQhEBFhiAAQhgAAhFhFgAjqAAIAAAAg");
	this.shape_6.setTransform(30.4,-5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,102,102,0.851)").s().p("AjWDXQhZhZAAh+QAAh8BZhaQBahZB8AAQB+AABYBZQBaBaAAB8QAAB+haBZQhYBZh+AAQh8AAhahZgAilClQBFBFBgAAQBiAABEhFQBFhFAAhgQAAhhhFhFQhEhFhiAAQhgAAhFBFQhFBFAABhQAABgBFBFgAilClQhFhFAAhgQAAhhBFhFQBFhFBgAAQBiAABEBFQBFBFAABhQAABghFBFQhEBFhiAAQhgAAhFhFgAjqAAIAAAAg");
	this.shape_7.setTransform(30.4,-5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,51,51,0.8)").s().p("AjWDXQhZhZAAh+QAAh8BZhaQBahZB8AAQB+AABYBZQBaBaAAB8QAAB+haBZQhYBZh+AAQh8AAhahZgAilClQBFBFBgAAQBiAABEhFQBFhFAAhgQAAhhhFhFQhEhFhiAAQhgAAhFBFQhFBFAABhQAABgBFBFgAilClQhFhFAAhgQAAhhBFhFQBFhFBgAAQBiAABEBFQBFBFAABhQAABghFBFQhEBFhiAAQhgAAhFhFgAjqAAIAAAAg");
	this.shape_8.setTransform(30.4,-5.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,0,0,0.749)").s().p("AjWDXQhZhZAAh+QAAh8BZhaQBahZB8AAQB+AABYBZQBaBaAAB8QAAB+haBZQhYBZh+AAQh8AAhahZgAjqAAQAABgBFBFQBFBFBgAAQBiAABEhFQBFhFAAhgQAAhhhFhFQhEhFhiAAQhgAAhFBFQhFBFAABhIAAAAgAilClQhFhFAAhgQAAhhBFhFQBFhFBgAAQBiAABEBFQBFBFAABhQAABghFBFQhEBFhiAAQhgAAhFhFgADrAAIAAAAg");
	this.shape_9.setTransform(30.4,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},1).wait(1));

	// Middle
	this.middle = new lib.Middle();
	this.middle.name = "middle";
	this.middle.parent = this;
	this.middle.setTransform(-2.4,-5.7,1,1,0,0,0,158.5,42.6);

	this.timeline.addTween(cjs.Tween.get(this.middle).wait(11));

	// Top
	this.top = new lib.Top();
	this.top.name = "top";
	this.top.parent = this;
	this.top.setTransform(-2.8,-79.8,1,1,0,0,0,157.8,74.2);

	this.timeline.addTween(cjs.Tween.get(this.top).wait(11));

	// Bottom
	this.bottom = new lib.Bottom();
	this.bottom.name = "bottom";
	this.bottom.parent = this;
	this.bottom.setTransform(-2,82.2,1,1,0,0,0,157.8,80.9);

	this.timeline.addTween(cjs.Tween.get(this.bottom).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.9,-155,319,319);


(lib.TearyAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.dispatchEvent('doneCrying');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Front Ear 1 
	this.frontEar1 = new lib.FrontEar1();
	this.frontEar1.name = "frontEar1";
	this.frontEar1.parent = this;
	this.frontEar1.setTransform(-49,-268,1,1,0,0,0,10,42.6);

	this.ikNode_14 = new lib.FrontEar1();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.parent = this;
	this.ikNode_14.setTransform(-49,-268,1,1,0,0,0,10,42.6);

	this.ikNode_13 = new lib.pivot();
	this.ikNode_13.name = "ikNode_13";
	this.ikNode_13.parent = this;
	this.ikNode_13.setTransform(-49.9,-229.9,1,1,0,0,0,12.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frontEar1}]}).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:0,x:-49.9,y:-229.9,regY:20}},{t:this.ikNode_14,p:{rotation:0,x:-49,y:-268,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.6,rotation:-2.8,x:-49.8,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-2.8,x:-50.8,y:-267.9,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.6,rotation:-5.7,x:-49.8,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-5.7,x:-52.7,y:-267.8,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-8.5,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-8.5,x:-54.6,y:-267.6,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-11.3,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-11.3,x:-56.4,y:-267.3,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-14.2,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-14.2,x:-58.3,y:-267,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-17,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-17,x:-60.2,y:-266.5,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-19.9,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-19.9,x:-62,y:-266,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-22.7,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-22.7,x:-63.6,y:-265.4,regX:10.1}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-25.5,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-25.5,x:-65.5,y:-264.6,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-28.4,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-28.4,x:-67.1,y:-263.8,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-31.2,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-31.2,x:-68.8,y:-262.9,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-34,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-34,x:-70.4,y:-261.9,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-36.9,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-36.9,x:-72,y:-260.8,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-39.7,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-39.7,x:-73.5,y:-259.8,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-42.5,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-42.5,x:-75,y:-258.5,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.6,rotation:-45.4,x:-49.8,y:-229.9,regY:20}},{t:this.ikNode_14,p:{rotation:-45.4,x:-76.4,y:-257.2,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-48.2,x:-49.8,y:-229.7,regY:20.1}},{t:this.ikNode_14,p:{rotation:-48.2,x:-77.7,y:-255.9,regX:10}}]},1).to({state:[{t:this.ikNode_13,p:{regX:12.5,rotation:-51.1,x:-49.9,y:-229.8,regY:20}},{t:this.ikNode_14,p:{rotation:-51.1,x:-78.9,y:-254.5,regX:10}}]},1).wait(1));

	// Front Ear 2
	this.frontEar2 = new lib.FrontEar2();
	this.frontEar2.name = "frontEar2";
	this.frontEar2.parent = this;
	this.frontEar2.setTransform(22.8,-263.5,1,1,0,0,0,11.3,44.6);

	this.ikNode_16 = new lib.FrontEar2();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.parent = this;
	this.ikNode_16.setTransform(22.8,-263.5,1,1,0,0,0,11.3,44.6);

	this.ikNode_15 = new lib.pivot();
	this.ikNode_15.name = "ikNode_15";
	this.ikNode_15.parent = this;
	this.ikNode_15.setTransform(16.7,-237.4,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frontEar2}]}).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:0,x:16.7,y:-237.4,regY:12.5}},{t:this.ikNode_16,p:{rotation:0,x:22.8,y:-263.5,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.6,rotation:2.4,x:16.8,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:2.4,x:23.9,y:-263.2,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:4.8,x:16.7,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:4.8,x:25,y:-262.8,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:7.2,x:16.7,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:7.2,x:26,y:-262.5,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.6,rotation:9.6,x:16.8,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:9.6,x:27.1,y:-261.9,regY:44.7,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:11.9,x:16.7,y:-237.2,regY:12.6}},{t:this.ikNode_16,p:{rotation:11.9,x:28.1,y:-261.6,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:14.3,x:16.7,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:14.3,x:29.1,y:-261.1,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:16.7,x:16.7,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:16.7,x:30,y:-260.6,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:19.1,x:16.7,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:19.1,x:31,y:-260,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:21.5,x:16.7,y:-237.2,regY:12.6}},{t:this.ikNode_16,p:{rotation:21.5,x:31.9,y:-259.4,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.6,rotation:23.9,x:16.8,y:-237.2,regY:12.5}},{t:this.ikNode_16,p:{rotation:23.9,x:32.9,y:-258.7,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:26.3,x:16.6,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:26.3,x:33.8,y:-258,regY:44.6,regX:11.4}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:28.7,x:16.6,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:28.7,x:34.6,y:-257.3,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:31.1,x:16.7,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:31.1,x:35.4,y:-256.5,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:33.4,x:16.7,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:33.4,x:36.2,y:-255.7,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.6,rotation:35.8,x:16.7,y:-237.2,regY:12.5}},{t:this.ikNode_16,p:{rotation:35.8,x:36.9,y:-254.9,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:38.2,x:16.6,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:38.2,x:37.7,y:-254,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:40.6,x:16.6,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:40.6,x:38.3,y:-253.2,regY:44.6,regX:11.3}}]},1).to({state:[{t:this.ikNode_15,p:{regX:12.5,rotation:43,x:16.7,y:-237.3,regY:12.5}},{t:this.ikNode_16,p:{rotation:43,x:39,y:-252.3,regY:44.6,regX:11.3}}]},1).wait(1));

	// Tear
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AgBAAQgBAAgBACQgBACAAAEQACABACAAQABAAACgBQACgDAAgDQAAgDgBgBQAAgCgCgDIAAgBQgBAEgCAEg");
	this.shape.setTransform(3.5,-210.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("AgEAIIABgGIACgCQACgEABgEIAAABIACAFIABAEQAAADgCADIgDABIgEgBg");
	this.shape_1.setTransform(3.5,-210.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AgGALQAAgGACgCQAAgDACgBQAEgFABgGQACAGABACQABACAAAEQAAAFgDAEQgCACgCAAQgDAAgDgCg");
	this.shape_2.setTransform(3.5,-210.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399FF").s().p("AgGALQAAgGACgCQAAgDACgBQAEgFABgGIADAIIABAGQAAAFgDAEQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAAAAAIgGgCg");
	this.shape_3.setTransform(3.5,-210.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AgIAPQAAgIABgDQACgDACgCQAFgHABgIQAEAIABADQABADAAAFQAAAHgEAFQgCACgDAAQgEAAgEgCg");
	this.shape_4.setTransform(3.6,-210.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399FF").s().p("AgIAPQAAgIACgDQABgDACgCQAFgHABgIIAFALIABAIQAAAHgEAFQgDACgDAAQgDAAgEgCg");
	this.shape_5.setTransform(3.6,-210.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AgKASQAAgJACgEQABgEAEgDQAGgIABgKQAFAKAAADQACAEAAAHQAAAIgFAGQgDADgDAAQgFAAgFgDg");
	this.shape_6.setTransform(3.7,-210);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399FF").s().p("AgKASQAAgJACgEQABgEAEgDQAFgIACgKIAFANQACAEAAAHQAAAIgFAGQgDADgDAAQgFAAgFgDg");
	this.shape_7.setTransform(3.7,-210);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AgNAWQAAgLADgEQACgGAEgDQAHgKACgLQAFALABAEQACAEAAAIQAAALgFAHQgFACgEAAQgGAAgGgCg");
	this.shape_8.setTransform(3.7,-209.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399FF").s().p("AgNAVQABgKACgEQACgGAEgDQAIgLABgLQAFAMACAEQABAEAAAIQABALgHAGQgDAEgFAAQgFAAgHgEg");
	this.shape_9.setTransform(3.7,-209.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.5,1,1).p("AgOAZQAAgMACgGQADgGAEgEQAJgLABgOQAHAOABAFQACAFAAAJQAAAMgHAIQgEAEgFAAQgHAAgGgEg");
	this.shape_10.setTransform(3.8,-209.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3399FF").s().p("AgPAZQABgMADgGQACgGAEgEQAJgLACgOIAIATQACAFAAAJQAAAMgIAIQgEAEgFAAQgGAAgIgEg");
	this.shape_11.setTransform(3.8,-209.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("AgRAdQAAgOADgGQADgHAFgFQAKgOACgPQAIAPABAHQADAFAAALQAAAOgIAJQgFAEgGAAQgIAAgIgEg");
	this.shape_12.setTransform(3.8,-209.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3399FF").s().p("AgRAcQAAgOADgFQADgIAFgEQAKgOACgPQAIAPABAHQADAFAAALQAAAOgIAIQgFAEgGABQgIgBgIgEg");
	this.shape_13.setTransform(3.8,-209.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5,1,1).p("AgTAgQAAgQAEgHQACgHAGgGQAMgPACgQQAIAQACAHQADAGAAANQAAAPgJAKQgGAFgHAAQgIAAgJgFg");
	this.shape_14.setTransform(3.9,-209);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3399FF").s().p("AgTAgQAAgQAEgHQACgHAGgGQAMgPACgQQAIAQACAHQADAGAAAMQAAAQgJAKQgGAEgHABQgIgBgJgEg");
	this.shape_15.setTransform(3.9,-209);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5,1,1).p("AgVAkQAAgRAEgIQADgJAHgGQAMgQADgTQAJATACAHQADAHAAAOQAAARgKALQgGAFgIAAQgJAAgKgFg");
	this.shape_16.setTransform(3.9,-208.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3399FF").s().p("AgVAkQAAgRAEgJQADgIAHgGQAMgQADgUQAJAUACAGQADAIAAAOQAAARgKALQgGAFgIgBQgJABgKgFg");
	this.shape_17.setTransform(3.9,-208.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.5,1,1).p("AgXAnQAAgTAEgIQADgKAHgGQAOgTADgUQAKAUADAIQADAIAAAPQAAATgLAMQgHAGgIAAQgLAAgKgGg");
	this.shape_18.setTransform(4,-208.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3399FF").s().p("AgXAnQAAgTAEgJQADgJAIgHQAOgSADgUQAKAUABAIQAEAIAAAPQAAATgLAMQgHAGgIAAQgKAAgLgGg");
	this.shape_19.setTransform(4,-208.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.5,1,1).p("AgZArQAAgVAEgKQAEgJAIgIQAQgUACgWQAMAWACAJQADAIAAARQAAAUgLAOQgIAFgJAAQgLAAgMgFg");
	this.shape_20.setTransform(4,-208.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3399FF").s().p("AgZArQAAgVAEgKQAEgJAIgIQAQgUACgWQAMAWACAJQADAIAAARQAAAUgLAOQgIAFgJAAQgLAAgMgFg");
	this.shape_21.setTransform(4,-208.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.5,1,1).p("AgbAuQAAgXAFgKQAEgKAIgJQARgWADgXQAMAXADAKQAEAJAAASQAAAXgNAOQgIAGgKAAQgMAAgNgGg");
	this.shape_22.setTransform(4.1,-208.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3399FF").s().p("AgbAuQAAgXAEgKQAFgKAIgJQARgWADgXQAMAXADAKQADAJAAASQABAXgNAOQgJAGgJAAQgMAAgNgGg");
	this.shape_23.setTransform(4.1,-208.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.5,1,1).p("AgeAyQAAgYAFgLQAFgMAJgJQATgXADgaQANAaACAKQAFAJAAAUQAAAYgOAQQgJAGgLAAQgNAAgOgGg");
	this.shape_24.setTransform(4.2,-207.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3399FF").s().p("AgeAyQAAgYAGgLQAEgMAJgJQATgXADgaQANAaACAKQAEAJAAAUQAAAYgNAQQgJAGgLAAQgNAAgOgGg");
	this.shape_25.setTransform(4.2,-207.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.5,1,1).p("AggA1QAAgaAGgMQAEgMAKgKQAUgZADgbQAPAbACALQAFAKAAAWQAAAZgPARQgKAHgLAAQgOAAgPgHg");
	this.shape_26.setTransform(4.2,-207.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3399FF").s().p("AgfA1QgBgaAGgMQAEgMALgKQATgZADgbQAOAbADALQAEAKABAWQAAAZgPARQgKAHgLAAQgOAAgOgHg");
	this.shape_27.setTransform(4.2,-207.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.5,1,1).p("AgiA4QAAgbAGgNQAFgNALgKQAUgbAEgdQAPAdADAMQAFAKAAAXQAAAcgQARQgKAIgMAAQgPAAgQgIg");
	this.shape_28.setTransform(4.3,-207.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3399FF").s().p("AgiA5QAAgcAGgNQAFgNALgKQAUgbAEgdQAPAdADAMQAFAKAAAYQAAAbgQASQgKAHgMAAQgPAAgQgHg");
	this.shape_29.setTransform(4.3,-207.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("AgkA8QAAgdAGgOQAFgNAMgMQAWgcAEgfQAQAfADANQAFALAAAYQAAAdgRATQgKAIgOAAQgPAAgRgIg");
	this.shape_30.setTransform(4.3,-207.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3399FF").s().p("AgkA8QAAgdAGgOQAFgNAMgMQAWgcAEgfQAQAfADANQAFALAAAYQAAAdgRATQgKAIgOAAQgPAAgRgIg");
	this.shape_31.setTransform(4.3,-207.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.5,1,1).p("AgmA/QAAgeAGgPQAGgOAMgMQAYgeAEghQARAhADANQAFANAAAZQAAAfgRATQgMAJgOAAQgQAAgSgJg");
	this.shape_32.setTransform(4.4,-207);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3399FF").s().p("AgmBAQAAggAGgNQAGgPAMgMQAYgeAEghQARAhADAOQAFALAAAaQAAAfgRAUQgMAIgOAAQgQAAgSgIg");
	this.shape_33.setTransform(4.4,-207);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,1,1).p("AgoBDQAAghAHgPQAGgPAMgMQAZghAFgiQARAiADAOQAGAOAAAaQAAAhgSAVQgMAJgPAAQgSAAgSgJg");
	this.shape_34.setTransform(4.4,-206.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3399FF").s().p("AgoBDQAAggAHgQQAGgPAMgNQAZgfAFgjQARAjADANQAGAOAAAbQAAAggSAVQgMAJgPAAQgSAAgSgJg");
	this.shape_35.setTransform(4.4,-206.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.5,1,1).p("AgrBHQAAgiAHgQQAHgQANgOQAaghAFglQATAlADAPQAHANAAAdQAAAigUAWQgMAJgQAAQgTAAgUgJg");
	this.shape_36.setTransform(4.5,-206.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3399FF").s().p("AgqBGQAAghAGgQQAHgQAOgOQAZghAFglQATAlADAOQAHAOgBAcQAAAjgTAVQgNAKgPAAQgTAAgTgKg");
	this.shape_37.setTransform(4.5,-206.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.5,1,1).p("AgRgJQgOAOgGARQgIAQAAAkQAVAKAUAAQAQAAANgKQAVgXAAgkQAAgegHgOQgDgPgRghQgDgDAAgDQgFAngcAjg");
	this.shape_38.setTransform(4.6,-206.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3399FF").s().p("AgtBKQABgkAHgQQAHgSANgOQAcgiAFgnQAAADACADQASAgADAQQAGAOAAAeQABAkgVAXQgNAKgRAAQgTAAgVgKg");
	this.shape_39.setTransform(4.6,-206.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).wait(1));

	// Eyes
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AClA3QgHgXAAggQAAggAHgXQAIgWAKAAQALAAAHAWQAHAXAAAgQAAAggHAXQgHAYgLgBQgKABgIgYgAjIA3QgHgXAAggQAAggAHgXQAHgWALAAQAKAAAHAWQAIAXAAAgQAAAggIAXQgHAYgKgBQgLABgHgYg");
	this.shape_40.setTransform(-15.8,-218);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AClA1QgHgVAAggQAAgfAHgXQAdgWAHAWQAHAXAAAfQAAAggHAVQgHAYgLAAQgKAAgIgYgAjIA1QgHgVAAggQAAgfAHgXQAHgWALABQAKgBAHAWQAIAXAAAfQAAAggIAVQgHAYgKAAQgLAAgHgYg");
	this.shape_41.setTransform(-15.8,-218);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AClA0QgHgVAAgfQAAgeAHgXQAdgVAHAVQAHAXAAAeQAAAfgHAVQgHAXgLAAQgKAAgIgXgAjIA0QgHgVAAgfQAAgeAHgXQAHgVALAAQAKAAAHAVQAIAXAAAeQAAAfgIAVQgHAXgKAAQgLAAgHgXg");
	this.shape_42.setTransform(-15.8,-218);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AClAzQgHgUAAgfQAAgdAHgXQAdgUAHAUQAHAXAAAdQAAAfgHAUQgHAWgLAAQgKAAgIgWgAjIAzQgHgUAAgfQAAgdAHgXQAHgUALAAQAKAAAHAUQAIAXAAAdQAAAfgIAUQgHAWgKAAQgLAAgHgWg");
	this.shape_43.setTransform(-15.8,-218);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AClAyQgHgUAAgeQAAgcAHgWQAdgUAHAUQAHAWAAAcQAAAegHAUQgHAWgLgBQgKABgIgWgAjIAyQgHgUAAgeQAAgcAHgWQAHgUALgBQAKABAHAUQAIAWAAAcQAAAegIAUQgHAWgKgBQgLABgHgWg");
	this.shape_44.setTransform(-15.8,-218);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AClAxQgHgUAAgdQAAgcAHgVQAdgTAHATQAHAVAAAcQAAAdgHAUQgHAUgLAAQgKAAgIgUgAjIAxQgHgUAAgdQAAgcAHgVQAHgTALAAQAKAAAHATQAIAVAAAcQAAAdgIAUQgHAUgKAAQgLAAgHgUg");
	this.shape_45.setTransform(-15.8,-218);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AClAwQgHgUAAgcQAAgbAHgUQAdgUAHAUQAHAUAAAbQAAAcgHAUQgHAUgLAAQgKAAgIgUgAjIAwQgHgUAAgcQAAgbAHgUQAHgUALAAQAKAAAHAUQAIAUAAAbQAAAcgIAUQgHAUgKAAQgLAAgHgUg");
	this.shape_46.setTransform(-15.8,-218);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AClAuQgHgSAAgcQAAgbAHgUQAdgSAHASQAHAUAAAbQAAAcgHASQgHAUgLAAQgKAAgIgUgAjIAuQgHgSAAgcQAAgbAHgUQAHgSALAAQAKAAAHASQAIAUAAAbQAAAcgIASQgHAUgKAAQgLAAgHgUg");
	this.shape_47.setTransform(-15.8,-218);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AClAtQgHgTAAgaQAAgaAHgTQAdgTAHATQAHATAAAaQAAAagHATQgHATgLAAQgKAAgIgTgAjIAtQgHgTAAgaQAAgaAHgTQAHgTALAAQAKAAAHATQAIATAAAaQAAAagIATQgHATgKAAQgLAAgHgTg");
	this.shape_48.setTransform(-15.8,-218);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AClArQgHgRAAgaQAAgZAHgTQAIgSAKAAQALAAAHASQAHATAAAZQAAAagHARQgHAUgLgBQgKABgIgUgAjIArQgHgRAAgaQAAgZAHgTQAHgSALAAQAKAAAHASQAIATAAAZQAAAagIARQgHAUgKgBQgLABgHgUg");
	this.shape_49.setTransform(-15.8,-218);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AjMAsQgHgQAAgZQABgYAHgUQAIgSALgBQALgBAHAQQAIASAAAZQAAAYgIASQgIAUgLABIgCAAQgKAAgHgRgAC6A9QgLgCgIgTQgHgSgBgYQAAgaAHgRQAegOAIASQAIATAAAZQAAAZgHAQQgHARgLAAIgBAAg");
	this.shape_50.setTransform(-15.9,-218);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AjPAuQgIgPABgZQABgYAIgTQAIgTAMgDQALgCAIAPQAIAQgBAZQgBAYgIASQgIAUgMACIgDABQgJAAgHgOgAC9A7QgLgCgJgUQgIgSgBgYQAAgZAHgQQAfgKAIASQAJAUAAAYQABAYgIAPQgGAPgKAAIgDgBg");
	this.shape_51.setTransform(-16,-218);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AjTAvQgIgOABgYQABgXAJgUQAJgTAMgEQAMgDAHANQAIAPAAAYQgBAXgJATQgJAUgMAEIgFABQgJAAgGgMgADAA5QgMgDgJgUQgJgTgBgXQgBgYAIgPQAggGAJATQAJAUABAWQAAAZgHANQgHAMgIAAIgFgBg");
	this.shape_52.setTransform(-16.1,-218);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AjXAwQgIgNACgXQABgWAJgVQAKgTAMgFQANgFAIANQAIANgBAXQgBAXgKATQgJAVgNAEIgGACQgJAAgGgKgADDA4QgNgFgJgUQgKgUgBgWQgBgXAIgOQAhgDAJAUQAKAUABAWQABAYgIAMQgFAKgIAAIgHgBg");
	this.shape_53.setTransform(-16.2,-218);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AjaAxQgIgMABgXQACgVAKgUQAKgVANgGQANgGAIAMQAIAMgBAWQgBAWgLAUQgKAVgNAFQgEADgEAAQgIAAgFgIgADGA2QgNgGgKgVQgKgUgCgWQgBgWAIgMQAiABAKAUQALAUABAWQABAXgIALQgFAIgHAAQgFAAgEgCg");
	this.shape_54.setTransform(-16.3,-217.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AjdAyQgJgKACgXQACgUAKgVQALgVAOgIQANgHAIALQAJAKgCAWQgCAWgKAUQgLAVgOAHQgGADgEAAQgHAAgEgGgADJA0QgNgHgLgVQgLgUgCgWQgBgVAIgLQAjAEALAVQALAVABAVQACAWgIAKQgFAHgHAAQgEAAgGgEg");
	this.shape_55.setTransform(-16.4,-217.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AjhAzQgJgJACgWQADgUALgVQALgVAOgJQAOgIAJAJQAIAJgCAVQgCAVgLAVQgLAWgOAHQgHAFgGAAQgGAAgEgFgADMAzQgOgIgLgWQgLgVgDgVQgBgUAIgKQAlAIALAVQALAVACAVQACAVgJAJQgEAFgGAAQgFAAgHgEg");
	this.shape_56.setTransform(-16.5,-217.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AjlA0QgJgIADgVQACgUAMgVQAMgVAOgKQAOgKAJAIQAJAIgCAUQgCAWgMAUQgMAWgPAJQgIAGgGAAQgFAAgEgEgADOAxQgOgJgMgWQgMgVgCgVQgCgUAJgIQAlAMAMAVQAMAVACAUQACAWgIAHQgEAEgFAAQgGAAgJgGg");
	this.shape_57.setTransform(-16.5,-217.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AjoA1QgKgHADgUQADgUAMgVQANgWAPgLQAOgLAKAHQAIAGgCAUQgDAVgMAVQgMAWgPAKQgKAHgHAAQgEAAgDgCgADRAvQgOgKgNgXQgMgVgDgUQgCgTAJgHQAnAPAMAWQAMAVADAUQACAUgJAHQgDACgEAAQgHAAgKgHg");
	this.shape_58.setTransform(-16.6,-217.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AjsA3QgJgGADgUQADgSANgWQANgWAPgNQAPgMAKAGQAJAFgDASQgDAVgNAVQgNAXgPALQgLAJgIAAIgGgBgADUAuQgPgMgNgWQgNgWgDgUQgCgSAJgGQAJgFAPAMQAQAMANAXQANAVACATQADAUgJAFQgCACgEAAQgIAAgLgJg");
	this.shape_59.setTransform(-16.7,-217.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

	// Mouth
	this.instance = new lib.ClosedMouth();
	this.instance.parent = this;
	this.instance.setTransform(-25.3,-171,1,1,0,0,0,84.7,16.4);

	this.instance_1 = new lib.SadMouth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31,-155.6,1,1,0,0,0,-31.1,-155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.5,-311.6,170.4,157.6);


(lib.SadEars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Back Ear 1
	this.backEar1 = new lib.BackEar1();
	this.backEar1.name = "backEar1";
	this.backEar1.parent = this;
	this.backEar1.setTransform(-58.9,-282.5,1,1,0,0,0,11,60.4);

	this.ikNode_22 = new lib.BackEar1();
	this.ikNode_22.name = "ikNode_22";
	this.ikNode_22.parent = this;
	this.ikNode_22.setTransform(-54.1,-274.4,1,1,0,0,0,15.8,68.5);

	this.ikNode_21 = new lib.pivot();
	this.ikNode_21.name = "ikNode_21";
	this.ikNode_21.parent = this;
	this.ikNode_21.setTransform(-51.5,-252.4,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backEar1}]}).to({state:[{t:this.ikNode_21,p:{rotation:0,x:-51.5,y:-252.4,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:0,x:-54.1,y:-274.4,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-3.8,x:-51.4,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-3.1,x:-55.5,y:-274.1,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-7.6,x:-51.4,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-6.2,x:-57.1,y:-273.8,regX:15.7}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-11.4,x:-51.5,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-9.3,x:-58.4,y:-273.4,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-15.2,x:-51.5,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-12.4,x:-59.8,y:-272.9,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-19,x:-51.5,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-15.4,x:-61.1,y:-272.2,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-22.8,x:-51.4,y:-252.3,regX:12.6,regY:12.5}},{t:this.ikNode_22,p:{rotation:-18.5,x:-62.4,y:-271.5,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-26.6,x:-51.4,y:-252.3,regX:12.6,regY:12.5}},{t:this.ikNode_22,p:{rotation:-21.6,x:-63.6,y:-270.8,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-30.3,x:-51.5,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-24.7,x:-65,y:-269.9,regX:15.7}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-34.1,x:-51.5,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-27.8,x:-65.9,y:-269,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-37.9,x:-51.4,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-30.9,x:-67.1,y:-268,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-41.7,x:-51.3,y:-252.2,regX:12.5,regY:12.6}},{t:this.ikNode_22,p:{rotation:-34,x:-68.1,y:-267,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-45.5,x:-51.5,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-37.1,x:-69,y:-265.8,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-49.3,x:-51.4,y:-252.4,regX:12.6,regY:12.5}},{t:this.ikNode_22,p:{rotation:-40.1,x:-69.8,y:-264.7,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-53.1,x:-51.5,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-43.2,x:-70.7,y:-263.4,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-56.9,x:-51.3,y:-252.2,regX:12.5,regY:12.6}},{t:this.ikNode_22,p:{rotation:-46.3,x:-71.3,y:-262.1,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-60.7,x:-51.5,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-49.4,x:-72,y:-260.6,regX:15.7}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-64.5,x:-51.4,y:-252.3,regX:12.5,regY:12.6}},{t:this.ikNode_22,p:{rotation:-52.5,x:-72.4,y:-259.4,regX:15.8}}]},1).to({state:[{t:this.ikNode_21,p:{rotation:-68.3,x:-51.4,y:-252.3,regX:12.5,regY:12.5}},{t:this.ikNode_22,p:{rotation:-55.6,x:-72.8,y:-258,regX:15.8}}]},1).wait(1));

	// Back Ear 2
	this.backEar2 = new lib.BackEar2();
	this.backEar2.name = "backEar2";
	this.backEar2.parent = this;
	this.backEar2.setTransform(11.6,-280.6,1,1,0,0,0,9.5,58.1);

	this.ikNode_24 = new lib.BackEar2();
	this.ikNode_24.name = "ikNode_24";
	this.ikNode_24.parent = this;
	this.ikNode_24.setTransform(11.6,-280.5,1,1,0,0,0,9.5,58.1);

	this.ikNode_23 = new lib.pivot();
	this.ikNode_23.name = "ikNode_23";
	this.ikNode_23.parent = this;
	this.ikNode_23.setTransform(9.6,-252.3,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backEar2}]}).to({state:[{t:this.ikNode_23,p:{rotation:0,x:9.6,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:0,x:11.6,y:-280.5,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:2.8,x:9.7,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:2.8,x:13,y:-280.4,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:5.6,x:9.7,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:5.6,x:14.3,y:-280.2,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:8.4,x:9.7,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:8.4,x:15.6,y:-279.9,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:11.1,x:9.7,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:11.1,x:16.8,y:-279.5,regX:9.4,regY:58.2}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:13.9,x:9.7,regX:12.6,y:-252.2,regY:12.5}},{t:this.ikNode_24,p:{rotation:13.9,x:18.3,y:-279.1,regX:9.5,regY:58.2}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:16.7,x:9.5,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:16.7,x:19.6,y:-278.7,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:19.5,x:9.7,regX:12.6,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:19.5,x:20.8,y:-278.3,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:22.3,x:9.5,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:22.3,x:22.1,y:-277.7,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:25.1,x:9.6,regX:12.5,y:-252.4,regY:12.5}},{t:this.ikNode_24,p:{rotation:25.1,x:23.3,y:-277,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:27.9,x:9.6,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:27.9,x:24.4,y:-276.4,regX:9.4,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:30.7,x:9.6,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:30.7,x:25.7,y:-275.5,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:33.4,x:9.6,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:33.4,x:26.8,y:-274.7,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:36.2,x:9.6,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:36.2,x:27.8,y:-273.9,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:39,x:9.6,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:39,x:28.9,y:-272.9,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:41.8,x:9.5,regX:12.5,y:-252.2,regY:12.6}},{t:this.ikNode_24,p:{rotation:41.8,x:29.9,y:-272,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:44.6,x:9.6,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:44.6,x:30.8,y:-271.1,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:47.4,x:9.6,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:47.4,x:31.7,y:-269.9,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_23,p:{rotation:50.2,x:9.6,regX:12.5,y:-252.3,regY:12.5}},{t:this.ikNode_24,p:{rotation:50.2,x:32.5,y:-268.9,regX:9.5,regY:58.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-343.9,98.7,85.4);


(lib.MouthAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(40).call(this.frame_40).wait(1));

	// Mouth
	this.instance = new lib.ClosedMouth();
	this.instance.parent = this;
	this.instance.setTransform(-25.4,-170.8,1,1,0,0,0,84.7,16.4);

	this.instance_1 = new lib.HalfOpenMouth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.8,-153.4,1,1,0,0,0,-10.8,-153.6);

	this.instance_2 = new lib.OpenMouth();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10.6,-155.3,1,1,0,0,0,-10.6,-155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},23).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.6,-187.7,170.4,33.9);


(lib.HappyEars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Back Ear 1
	this.backEar1 = new lib.BackEar1();
	this.backEar1.name = "backEar1";
	this.backEar1.parent = this;
	this.backEar1.setTransform(-58.9,-282.5,1,1,0,0,0,11,60.4);

	this.ikNode_11 = new lib.pivot();
	this.ikNode_11.name = "ikNode_11";
	this.ikNode_11.parent = this;
	this.ikNode_11.setTransform(-51.5,-252.4,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backEar1,p:{regX:11,regY:60.4,x:-58.9,y:-282.5,rotation:0}}]}).to({state:[{t:this.ikNode_11,p:{rotation:0,x:-51.5,y:-252.4,regY:12.5}},{t:this.backEar1,p:{regX:15.8,regY:68.5,x:-54.1,y:-274.4,rotation:0}}]},1).to({state:[{t:this.ikNode_11,p:{rotation:-1.6,x:-51.4,y:-252.3,regY:12.5}},{t:this.backEar1,p:{regX:15.8,regY:68.5,x:-54.7,y:-274.3,rotation:0}}]},1).to({state:[{t:this.ikNode_11,p:{rotation:-3.2,x:-51.4,y:-252.2,regY:12.6}},{t:this.backEar1,p:{regX:15.8,regY:68.5,x:-55.3,y:-274.1,rotation:-0.1}}]},1).to({state:[{t:this.ikNode_11,p:{rotation:-4.9,x:-51.5,y:-252.3,regY:12.5}},{t:this.backEar1,p:{regX:15.8,regY:68.5,x:-55.9,y:-274.1,rotation:-0.1}}]},1).to({state:[{t:this.ikNode_11,p:{rotation:-6.5,x:-51.5,y:-252.3,regY:12.5}},{t:this.backEar1,p:{regX:15.8,regY:68.5,x:-56.5,y:-273.9,rotation:-0.1}}]},1).to({state:[{t:this.ikNode_11,p:{rotation:-8.1,x:-51.4,y:-252.2,regY:12.6}},{t:this.backEar1,p:{regX:15.8,regY:68.5,x:-57.1,y:-273.8,rotation:-0.2}}]},1).to({state:[{t:this.ikNode_11,p:{rotation:-9.7,x:-51.5,y:-252.3,regY:12.5}},{t:this.backEar1,p:{regX:15.8,regY:68.5,x:-57.7,y:-273.6,rotation:-0.2}}]},1).to({state:[{t:this.ikNode_11,p:{rotation:-11.3,x:-51.5,y:-252.3,regY:12.5}},{t:this.backEar1,p:{regX:15.8,regY:68.5,x:-58.3,y:-273.4,rotation:-0.2}}]},1).to({state:[{t:this.ikNode_11,p:{rotation:-13,x:-51.4,y:-252.2,regY:12.6}},{t:this.backEar1,p:{regX:15.8,regY:68.5,x:-58.9,y:-273.2,rotation:-0.3}}]},1).wait(1));

	// Back Ear 2
	this.backEar2 = new lib.BackEar2();
	this.backEar2.name = "backEar2";
	this.backEar2.parent = this;
	this.backEar2.setTransform(11.6,-280.6,1,1,0,0,0,9.5,58.1);

	this.ikNode_12 = new lib.pivot();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.parent = this;
	this.ikNode_12.setTransform(9.6,-252.4,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backEar2,p:{rotation:0,x:11.6,y:-280.6,regX:9.5,regY:58.1}}]}).to({state:[{t:this.ikNode_12,p:{rotation:0,y:-252.4,regY:12.5,x:9.6}},{t:this.backEar2,p:{rotation:0,x:11.6,y:-280.6,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-0.8,y:-252.3,regY:12.5,x:9.6}},{t:this.backEar2,p:{rotation:-0.8,x:11.1,y:-280.6,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-1.5,y:-252.4,regY:12.5,x:9.6}},{t:this.backEar2,p:{rotation:-1.5,x:10.9,y:-280.6,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.3,y:-252.3,regY:12.5,x:9.6}},{t:this.backEar2,p:{rotation:-2.3,x:10.5,y:-280.6,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-3,y:-252.2,regY:12.6,x:9.6}},{t:this.backEar2,p:{rotation:-3,x:10.1,y:-280.6,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-3.8,y:-252.4,regY:12.5,x:9.6}},{t:this.backEar2,p:{rotation:-3.8,x:9.8,y:-280.7,regX:9.5,regY:58.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-4.6,y:-252.3,regY:12.5,x:9.6}},{t:this.backEar2,p:{rotation:-4.6,x:9.2,y:-280.6,regX:9.4,regY:58.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-5.3,y:-252.3,regY:12.5,x:9.6}},{t:this.backEar2,p:{rotation:-5.3,x:9,y:-280.5,regX:9.5,regY:58.2}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-6.1,y:-252.2,regY:12.6,x:9.7}},{t:this.backEar2,p:{rotation:-6.1,x:8.6,y:-280.6,regX:9.5,regY:58.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-343.9,98.7,85.4);


(lib.EatingAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Front Ear 1 
	this.frontEar1 = new lib.FrontEar1();
	this.frontEar1.name = "frontEar1";
	this.frontEar1.parent = this;
	this.frontEar1.setTransform(-49,-268,1,1,0,0,0,10,42.6);

	this.ikNode_9 = new lib.pivot();
	this.ikNode_9.name = "ikNode_9";
	this.ikNode_9.parent = this;
	this.ikNode_9.setTransform(-49.9,-229.9,1,1,0,0,0,12.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frontEar1,p:{rotation:0,x:-49,y:-268,regX:10}}]}).to({state:[{t:this.ikNode_9,p:{rotation:0,y:-229.9,regX:12.5,x:-49.9,regY:20}},{t:this.frontEar1,p:{rotation:0,x:-49,y:-268,regX:10}}]},1).to({state:[{t:this.ikNode_9,p:{rotation:-0.5,y:-229.8,regX:12.5,x:-49.9,regY:20}},{t:this.frontEar1,p:{rotation:-0.5,x:-49.3,y:-267.9,regX:10}}]},1).to({state:[{t:this.ikNode_9,p:{rotation:-0.9,y:-229.8,regX:12.6,x:-49.8,regY:20}},{t:this.frontEar1,p:{rotation:-0.9,x:-49.6,y:-267.9,regX:10}}]},1).to({state:[{t:this.ikNode_9,p:{rotation:-1.4,y:-229.8,regX:12.5,x:-49.9,regY:20}},{t:this.frontEar1,p:{rotation:-1.4,x:-49.9,y:-267.9,regX:10}}]},1).to({state:[{t:this.ikNode_9,p:{rotation:-1.9,y:-229.8,regX:12.5,x:-49.9,regY:20}},{t:this.frontEar1,p:{rotation:-1.9,x:-50.2,y:-267.9,regX:10}}]},1).to({state:[{t:this.ikNode_9,p:{rotation:-2.3,y:-229.7,regX:12.5,x:-49.9,regY:20.1}},{t:this.frontEar1,p:{rotation:-2.3,x:-50.5,y:-267.9,regX:10}}]},1).to({state:[{t:this.ikNode_9,p:{rotation:-2.8,y:-229.7,regX:12.6,x:-49.8,regY:20.1}},{t:this.frontEar1,p:{rotation:-2.8,x:-50.7,y:-267.9,regX:10.1}}]},1).to({state:[{t:this.ikNode_9,p:{rotation:-3.3,y:-229.8,regX:12.6,x:-49.8,regY:20}},{t:this.frontEar1,p:{rotation:-3.3,x:-51,y:-267.9,regX:10.1}}]},1).to({state:[{t:this.ikNode_9,p:{rotation:-3.7,y:-229.8,regX:12.5,x:-49.9,regY:20}},{t:this.frontEar1,p:{rotation:-3.7,x:-51.3,y:-267.9,regX:10.1}}]},1).wait(1));

	// Front Ear 2
	this.frontEar2 = new lib.FrontEar2();
	this.frontEar2.name = "frontEar2";
	this.frontEar2.parent = this;
	this.frontEar2.setTransform(22.8,-263.5,1,1,0,0,0,11.3,44.6);

	this.ikNode_10 = new lib.pivot();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.parent = this;
	this.ikNode_10.setTransform(16.7,-237.4,1,1,0,0,0,12.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frontEar2,p:{rotation:0,x:22.8,regY:44.6,y:-263.5,regX:11.3}}]}).to({state:[{t:this.ikNode_10,p:{rotation:0,x:16.7,y:-237.4,regY:12.5,regX:12.5}},{t:this.frontEar2,p:{rotation:0,x:22.8,regY:44.6,y:-263.5,regX:11.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-0.6,x:16.6,y:-237.3,regY:12.5,regX:12.5}},{t:this.frontEar2,p:{rotation:-0.6,x:22.5,regY:44.6,y:-263.5,regX:11.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.1,x:16.6,y:-237.4,regY:12.5,regX:12.5}},{t:this.frontEar2,p:{rotation:-1.1,x:22.3,regY:44.7,y:-263.5,regX:11.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-1.7,x:16.6,y:-237.2,regY:12.6,regX:12.5}},{t:this.frontEar2,p:{rotation:-1.7,x:22,regY:44.6,y:-263.7,regX:11.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-2.3,x:16.6,y:-237.3,regY:12.5,regX:12.5}},{t:this.frontEar2,p:{rotation:-2.3,x:21.7,regY:44.6,y:-263.7,regX:11.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-2.8,x:16.6,y:-237.2,regY:12.6,regX:12.5}},{t:this.frontEar2,p:{rotation:-2.8,x:21.5,regY:44.6,y:-263.8,regX:11.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-3.4,x:16.7,y:-237.3,regY:12.5,regX:12.6}},{t:this.frontEar2,p:{rotation:-3.4,x:21.3,regY:44.6,y:-263.8,regX:11.4}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4,x:16.6,y:-237.4,regY:12.5,regX:12.5}},{t:this.frontEar2,p:{rotation:-4,x:20.9,regY:44.6,y:-263.9,regX:11.3}}]},1).to({state:[{t:this.ikNode_10,p:{rotation:-4.5,x:16.6,y:-237.4,regY:12.5,regX:12.5}},{t:this.frontEar2,p:{rotation:-4.5,x:20.6,regY:44.6,y:-263.9,regX:11.3}}]},1).wait(1));

	// Mouth
	this.instance = new lib.ClosedMouth();
	this.instance.parent = this;
	this.instance.setTransform(-25.4,-170.8,1,1,0,0,0,84.7,16.4);

	this.instance_1 = new lib.OpenMouth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-10.6,-155.3,1,1,0,0,0,-10.6,-155.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.6,-311.6,170.4,157.8);


(lib.menuBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Actions Box
	this.actions = new lib.ActionsBox();
	this.actions.name = "actions";
	this.actions.parent = this;
	this.actions.setTransform(439.9,362,1,1,0,0,0,439.9,362);

	this.timeline.addTween(cjs.Tween.get(this.actions).wait(1));

	// Text
	this.Text = new cjs.Text("What will YOU throw?", "16px 'Arial'", "#FFFFFF");
	this.Text.name = "Text";
	this.Text.lineHeight = 20;
	this.Text.lineWidth = 131;
	this.Text.parent = this;
	this.Text.setTransform(22,342.9);

	this.timeline.addTween(cjs.Tween.get(this.Text).wait(1));

	// White Outline/Fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("EgpBgEMMBSDAAAIAAIZMhSDAAAg");
	this.shape.setTransform(275.3,362);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00557B").s().p("EgpBAENIAAoYMBSDAAAIAAIYg");
	this.shape_1.setTransform(275.3,362);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Black Outline
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("EgqRgFKMBUjAAAIAAKVMhUjAAAg");
	this.shape_2.setTransform(275.4,362);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Gold Outline
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCAC22").ss(6,1,1).p("EgpWgEvMBS9AAAIAAJfMhTNAAAIAApf");
	this.shape_3.setTransform(275.4,362);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.menuBox, new cjs.Rectangle(3.4,327.4,544.1,69.3), null);


(lib.Cool = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("Geodude_1");
	}
	this.frame_18 = function() {
		playSound("Ow");
	}
	this.frame_36 = function() {
		
	}
	this.frame_42 = function() {
		this.dispatchEvent('hit');
	}
	this.frame_51 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(17).call(this.frame_18).wait(18).call(this.frame_36).wait(6).call(this.frame_42).wait(9).call(this.frame_51).wait(10));

	// Path 2
	this.dude = new lib.Rock();
	this.dude.name = "dude";
	this.dude.parent = this;
	this.dude.setTransform(413.2,104.9,0.171,0.171,165);
	this.dude._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dude).wait(42).to({_off:false},0).wait(1).to({regY:-3,scaleX:0.17,scaleY:0.17,rotation:146.2,x:392.3,y:96.2},0).wait(1).to({rotation:127.4,x:371.9,y:85.6},0).wait(1).to({scaleX:0.17,scaleY:0.17,rotation:108.7,x:352.4,y:73.3},0).wait(1).to({rotation:89.9,x:334.1,y:59.1},0).wait(1).to({rotation:71.2,x:317.8,y:42.6},0).wait(1).to({rotation:52.5,x:304.2,y:23.8},0).wait(1).to({rotation:33.7,x:294.2,y:2.8},0).wait(1).to({rotation:15,x:288.4,y:-19.5},0).wait(1).to({_off:true},1).wait(9));

	// Path 1
	this.dude_1 = new lib.Rock();
	this.dude_1.name = "dude_1";
	this.dude_1.parent = this;
	this.dude_1.setTransform(-25.7,254.9,0.172,0.172,0,0,0,-1.4,0);

	this.timeline.addTween(cjs.Tween.get(this.dude_1).wait(19).to({regX:0,regY:-3,rotation:6.9,x:-11.6,y:239.8},0).wait(1).to({rotation:13.8,x:2.8,y:225.8},0).wait(1).to({rotation:20.6,x:17.9,y:212.5},0).wait(1).to({rotation:27.5,x:33.5,y:199.9},0).wait(1).to({rotation:34.4,x:49.7,y:188},0).wait(1).to({rotation:41.3,x:66.4,y:176.8},0).wait(1).to({rotation:48.1,x:83.6,y:166.5},0).wait(1).to({rotation:55,x:101.2,y:156.9},0).wait(1).to({rotation:61.9,x:119.2,y:148.1},0).wait(1).to({rotation:68.8,x:137.6,y:140.1},0).wait(1).to({rotation:75.6,x:156.3,y:132.9},0).wait(1).to({rotation:82.5,x:175.3,y:126.5},0).wait(1).to({rotation:89.4,x:194.6,y:120.9},0).wait(1).to({rotation:96.3,x:214,y:116.1},0).wait(1).to({rotation:103.2,x:233.7,y:112},0).wait(1).to({rotation:110,x:253.4,y:108.7},0).wait(1).to({rotation:116.9,x:273.3,y:106.1},0).wait(1).to({rotation:123.8,x:293.2,y:104.1},0).wait(1).to({rotation:130.7,x:313.2,y:102.8},0).wait(1).to({rotation:137.5,x:333.2,y:102.2},0).wait(1).to({rotation:144.4,x:353.2,y:102.1},0).wait(1).to({rotation:151.3,x:373.2,y:102.7},0).wait(1).to({rotation:158.2,x:393.2,y:103.8},0).wait(1).to({rotation:165,x:413.2,y:105.5},0).to({_off:true},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.3,232.4,49.8,44);


(lib.FallingBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.dispatchEvent('finally');
	}
	this.frame_125 = function() {
		this.dispatchEvent('finished!');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(86).call(this.frame_125).wait(1));

	// Layer_1
	this.pokeBall = new lib.Pokeball();
	this.pokeBall.name = "pokeBall";
	this.pokeBall.parent = this;
	this.pokeBall.setTransform(316.7,78.1,0.206,0.206,29.9,0,0,-1.7,4.9);
	this.pokeBall.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.pokeBall).to({regY:5.1,rotation:-0.1,y:147.2},9).to({regY:5.4,rotation:-15.1,x:316.8},5).to({regY:5.1,rotation:-0.1,x:316.7},5).to({regX:-1.5,regY:5.4,rotation:13.3,y:147.3},5).to({regX:-1.7,regY:5.1,rotation:-0.1,y:147.2},5).wait(10).to({rotation:-0.1},0).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(262,19.1,117,125);


(lib.SafariBall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("RBYPokeballThrow2");
	}
	this.frame_8 = function() {
		playSound("RBYCatchingAttempt2");
	}
	this.frame_42 = function() {
		this.stop();
		this.dispatchEvent('catch');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(34).call(this.frame_42).wait(1));

	// Path 2
	this.pokeBall = new lib.Pokeball();
	this.pokeBall.name = "pokeBall";
	this.pokeBall.parent = this;
	this.pokeBall.setTransform(366.3,118.8,0.206,0.206,0,0,0,-1.7,4.6);
	this.pokeBall.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);
	this.pokeBall._off = true;
	this.pokeBall.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.pokeBall.cache(-164,-157,323,323);

	this.timeline.addTween(cjs.Tween.get(this.pokeBall).wait(14).to({_off:false},0).wait(1).to({regX:-2.5,regY:4.5,rotation:1.4,x:363.8,y:116.9},0).wait(1).to({rotation:2.9,x:361.4,y:114.9},0).wait(1).to({rotation:4.3,x:359.1,y:112.9},0).wait(1).to({rotation:5.7,x:356.7,y:111},0).wait(1).to({rotation:7.1,x:354.4,y:109},0).wait(1).to({rotation:8.6,x:352,y:107.1},0).wait(1).to({rotation:10,x:349.6,y:105.1},0).wait(1).to({rotation:11.4,x:347.2,y:103.2},0).wait(1).to({rotation:12.9,x:344.9,y:101.3},0).wait(1).to({rotation:14.3,x:342.5,y:99.3},0).wait(1).to({rotation:15.7,x:340.2,y:97.4},0).wait(1).to({rotation:17.1,x:337.8,y:95.4},0).wait(1).to({rotation:18.6,x:335.4,y:93.5},0).wait(1).to({rotation:20,x:333.1,y:91.5},0).wait(1).to({rotation:21.4,x:330.7,y:89.6},0).wait(1).to({rotation:22.9,x:328.4,y:87.6},0).wait(1).to({rotation:24.3,x:326,y:85.7},0).wait(1).to({rotation:25.7,x:323.7,y:83.8},0).wait(1).to({rotation:27.1,x:321.3,y:81.7},0).wait(1).to({rotation:28.6,x:318.9,y:79.8},0).wait(1).to({rotation:30,x:316.6,y:77.9},0).wait(8));

	// Path 1
	this.pokeBall_1 = new lib.Pokeball();
	this.pokeBall_1.name = "pokeBall_1";
	this.pokeBall_1.parent = this;
	this.pokeBall_1.setTransform(-36.4,297.8,0.206,0.206,-165,0,0,-2.4,4.4);
	this.pokeBall_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",-3,4,5);

	this.timeline.addTween(cjs.Tween.get(this.pokeBall_1).to({regX:-1.9,regY:4.6,rotation:0,x:366.3,y:118.8},14).to({_off:true},1).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.4,243.5,134,128);


(lib.idleGoomy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Front Ears
	this.frontEar1 = new lib.FrontEar1();
	this.frontEar1.name = "frontEar1";
	this.frontEar1.parent = this;
	this.frontEar1.setTransform(-42.6,-242.6,0.484,0.484,0,0,0,9.6,42.4);

	this.frontEar2 = new lib.FrontEar2();
	this.frontEar2.name = "frontEar2";
	this.frontEar2.parent = this;
	this.frontEar2.setTransform(-7.8,-240.4,0.484,0.484,0,0,0,11.1,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.frontEar2},{t:this.frontEar1}]}).wait(1));

	// Cheeks
	this.cheek2 = new lib.Cheek2();
	this.cheek2.name = "cheek2";
	this.cheek2.parent = this;
	this.cheek2.setTransform(5.9,-201.6,0.484,0.484,0,0,0,9.8,22.9);

	this.cheek1 = new lib.Cheek1();
	this.cheek1.name = "cheek1";
	this.cheek1.parent = this;
	this.cheek1.setTransform(-53.3,-203.3,0.484,0.484,0,0,0,12.9,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cheek1},{t:this.cheek2}]}).wait(1));

	// Sadness
	this.sad = new lib.TearyAnimation();
	this.sad.name = "sad";
	this.sad.parent = this;
	this.sad.setTransform(-31.1,-204.9,0.484,0.484,0,0,0,-25.4,-190.3);

	this.timeline.addTween(cjs.Tween.get(this.sad).wait(1));

	// Effects
	this.shine = new lib.HeadShine();
	this.shine.name = "shine";
	this.shine.parent = this;
	this.shine.setTransform(-15.1,-232.7,0.484,0.484,0,0,0,7.7,8.6);

	this.bodyShadow = new lib.BodyShadow();
	this.bodyShadow.name = "bodyShadow";
	this.bodyShadow.parent = this;
	this.bodyShadow.setTransform(-67,-201.9,0.484,0.484,0,0,0,36.3,81.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bodyShadow},{t:this.shine}]}).wait(1));

	// Eyes
	this.eyes = new lib.Eyes();
	this.eyes.name = "eyes";
	this.eyes.parent = this;
	this.eyes.setTransform(-26.5,-218.3,0.484,0.484,0,0,0,20.8,7.9);

	this.timeline.addTween(cjs.Tween.get(this.eyes).wait(1));

	// Eating Mouth
	this.eating = new lib.EatingAnimation();
	this.eating.name = "eating";
	this.eating.parent = this;
	this.eating.setTransform(-31.1,-195.7,0.484,0.484,0,0,0,-25.6,-171);

	this.timeline.addTween(cjs.Tween.get(this.eating).wait(1));

	// Idle Mouth
	this.mouth = new lib.MouthAnimation();
	this.mouth.name = "mouth";
	this.mouth.parent = this;
	this.mouth.setTransform(-18.9,-112.9,0.484,0.484,0,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// Head
	this.head = new lib.Head();
	this.head.name = "head";
	this.head.parent = this;
	this.head.setTransform(-30.8,-217,0.484,0.484,0,0,0,85.2,59.4);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1));

	// Sad Ears
	this.sadEars = new lib.SadEars();
	this.sadEars.name = "sadEars";
	this.sadEars.parent = this;
	this.sadEars.setTransform(-29.4,-258.7,0.484,0.484,0,0,0,-21.9,-301.5);

	this.timeline.addTween(cjs.Tween.get(this.sadEars).wait(1));

	// Happy Ears
	this.happyEars = new lib.HappyEars();
	this.happyEars.name = "happyEars";
	this.happyEars.parent = this;
	this.happyEars.setTransform(-29.4,-258.7,0.484,0.484,0,0,0,-21.9,-301.5);

	this.timeline.addTween(cjs.Tween.get(this.happyEars).wait(1));

	// Back Ears
	this.backEar1 = new lib.BackEar1();
	this.backEar1.name = "backEar1";
	this.backEar1.parent = this;
	this.backEar1.setTransform(-47.4,-249.7,0.484,0.484,0,0,0,10.7,60.1);

	this.backEar2 = new lib.BackEar2();
	this.backEar2.name = "backEar2";
	this.backEar2.parent = this;
	this.backEar2.setTransform(-13.3,-248.7,0.484,0.484,0,0,0,9.3,57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backEar2},{t:this.backEar1}]}).wait(1));

	// Foot
	this.foot = new lib.Foot();
	this.foot.name = "foot";
	this.foot.parent = this;
	this.foot.setTransform(-36.5,-180.9,0.484,0.484,0,0,0,98.9,46.8);

	this.timeline.addTween(cjs.Tween.get(this.foot).wait(1));

}).prototype = getMCSymbolPrototype(lib.idleGoomy, new cjs.Rectangle(-84.9,-279.3,97.2,121.3), null);


(lib.shrinkGoomy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.dispatchEvent('done');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// Layer_1
	this.goomy = new lib.idleGoomy();
	this.goomy.name = "goomy";
	this.goomy.parent = this;
	this.goomy.setTransform(-133.5,-91.8,1.007,1.007,0,0,0,-132.6,-91.5);

	this.timeline.addTween(cjs.Tween.get(this.goomy).wait(1).to({regX:-31.3,regY:-218.8,scaleX:0.7,scaleY:0.71,x:-42,y:-200.6},0).wait(1).to({scaleX:0.4,scaleY:0.41,x:-52.5,y:-181.3},0).wait(1).to({scaleX:0.09,scaleY:0.11,x:-63,y:-161.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-281,97.9,122.2);


// stage content:
(lib.SafariDay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root = this;
		
		createjs.Sound.play("pkm", {loop: -1});
		createjs.Sound.play("goo", {delay: 7});
		
		var happy;
		var busy; 
		var bait;
		var help;
		var pokeInfo;
		var menu;
		var goomy;
		var smallGoomy;
		var shadeSlide;
		var shadeOn;
		var safariBall;
		var geodude;
		var flash;
		var fallingBall;
		var blueTint;
		var yellowTint;
		var background1;
		var hiddenBtn1;
		var hiddenBtn2;
		shadeOn = false;
		
		hiddenBtn1 = new lib.Music2();
		root.addChild(hiddenBtn1);
		hiddenBtn1.x = 0;
		hiddenBtn1.y = 0;
		root.setChildIndex(hiddenBtn1, 4);
		
		hiddenBtn2 = new lib.Music3();
		root.addChild(hiddenBtn2);
		hiddenBtn2.x = 520;
		hiddenBtn2.y = 0;
		root.setChildIndex(hiddenBtn2, 4);
		
		hiddenBtn1.secretBtn1.addEventListener("click", fl_MouseClickHandler6.bind(hiddenBtn1));
		hiddenBtn2.secretBtn2.addEventListener("click", fl_MouseClickHandler7.bind(hiddenBtn2));
		
		background1 = new lib.level();
		root.addChild(background1);
		root.setChildIndex(background1, 0);
		createInterface();
		reset();
		
		function createInterface()
		{
			pokeInfo = new lib.pkmInfo();
			root.addChild(pokeInfo);
			pokeInfo.x = -25;
			pokeInfo.y = -5;
			//root.setChildIndex(pokeInfo, 1);
			
			ballInfo = new lib.ballCount();
			root.addChild(ballInfo);
			ballInfo.x = 5;
			ballInfo.y = 5;
			//root.setChildIndex(ballInfo, 1);
			
			menu = new lib.menuBox();
			root.addChild(menu);
			menu.y = 1;
			//root.setChildIndex(menu, 1);
			
			goomy = new lib.idleGoomy();
			root.addChild(goomy);
			goomy.x = 455;
			goomy.y = 315;
			//root.setChildIndex(goomy, 1);
			
			goomy.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(goomy));
			menu.actions.ball.addEventListener("click", fl_MouseClickHandler1.bind(menu));
			menu.actions.food.addEventListener("click", fl_MouseClickHandler2.bind(menu));
			menu.actions.rock.addEventListener("click", fl_MouseClickHandler3.bind(menu));
			menu.actions.run.addEventListener("click", fl_MouseClickHandler4.bind(menu))
		}
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			reset();
			createjs.Sound.play("goo", {delay: 0.7});
			goomy.mouth.gotoAndPlay(0);
		}
		
		function fl_MouseClickHandler1()
		{
			if (busy == false) {
				reset();
				menu.Text.text = "YOU used SAFARI BALL!";
				busy = true;
				safariBall = new lib.SafariBall();
				root.addChild(safariBall);
				safariBall.x = 0;
				safariBall.y = -3;
				root.setChildIndex(safariBall, 2);
				safariBall.gotoAndPlay(1);
				safariBall.on('catch', flashHandler);	
				createjs.Sound.play("congrats", {delay: 3500});
			}
		}
		
		function fl_MouseClickHandler2()
		{
			if (busy == false) {
				reset();
				menu.Text.text = "Use bait to feed GOOMY!";
				busy = true;
				goomy.eating.visible = true;
				goomy.happyEars.visible = true;
				goomy.frontEar1.visible = false;
				goomy.frontEar2.visible = false;
				goomy.backEar1.visible = false;
				goomy.backEar2.visible = false;
				DragAndDrop();
			}
		}
		
		function fl_MouseClickHandler3()
		{
			if (busy == false) {
				reset();
				busy = true;
				menu.Text.text = "YOU threw a GEODUDE!";
				goomy.sad.visible = true;
				goomy.sadEars.visible = true;
				goomy.frontEar1.visible = false;
				goomy.frontEar2.visible = false;
				goomy.backEar1.visible = false;
				goomy.backEar2.visible = false;
				goomy.mouth.visible = false;
				goomy.eyes.visible = false;
				geodude = new lib.Cool();
				root.addChild(geodude);
				geodude.x = 0;
				geodude.y = -10;
				root.setChildIndex(geodude, 2);
				geodude.gotoAndPlay(1);
				geodude.on('hit', Cry);
			}
		}
		
		function fl_MouseClickHandler4()
		{
			menu.Text.text = "YOU tried to run away!";
			window.close();
		}
		
		function fl_MouseClickHandler5() 
		{
			happy.holidayBtn.removeEventListener("click", fl_MouseClickHandler5);
			root.removeChild(happy);
			root.removeChild(help);
			createjs.Sound.play("goo", {delay: 10});
			createInterface();
			reset();
		}
		
		function fl_MouseClickHandler6()
		{
			if (busy == false) {
				reset();
				createjs.Sound.stop("pkm");
				createjs.Sound.play("fc", {loop: -1}, {volume: 0.1});
				turnOff();
				blueTint = new lib.Blue();
				root.addChild(blueTint);
				root.setChildIndex(blueTint, 4);
				blueTint.party.gotoAndPlay(1);
				reset();
			}
		}
		
		function fl_MouseClickHandler7()
		{
			if (busy == false) {
				reset();
				createjs.Sound.stop("pkm");
				createjs.Sound.play("gta", {loop: -1}, {volume: 0.1});
				turnOff();
				shadeSlide = new lib.shadeSlider();
				shadeOn = true;
				root.addChild(shadeSlide);
				root.setChildIndex(shadeSlide, 4);
				shadeSlide.x = 430;
				shadeSlide.y = -19;
				shadeSlide.gotoAndPlay(1);
				yellowTint = new lib.Yellow();
				root.addChild(yellowTint);
				root.setChildIndex(yellowTint, 4);
			}
		}
		
		function turnOff()
		{
			hiddenBtn1.secretBtn1.removeEventListener("click", fl_MouseClickHandler6);
			hiddenBtn2.secretBtn2.removeEventListener("click", fl_MouseClickHandler7);
			root.removeChild(hiddenBtn1);
			root.removeChild(hiddenBtn2);
		}
		
		function reset() //I use the .visible variable for animation syncing.
		{
			busy = false;
			menu.Text.text = "What will YOU throw?";
			goomy.mouth.visible = true;
			goomy.eating.visible = false;
			goomy.happyEars.visible = false;
			goomy.sad.visible = false;
			goomy.sadEars.visible = false;
			goomy.eyes.visible = true;
			goomy.frontEar1.visible = true;
			goomy.frontEar2.visible = true;
			goomy.backEar1.visible = true;
			goomy.backEar2.visible = true;
			goomy.sad.gotoAndStop(0);
			goomy.sadEars.gotoAndStop(0);
			goomy.eating.gotoAndStop(0);
			goomy.happyEars.gotoAndStop(0);
			goomy.mouth.gotoAndStop(0);
			root.setChildIndex(background1, 0);
			root.setChildIndex(ballInfo, 1);
			root.setChildIndex(pokeInfo, 1);
			root.setChildIndex(menu, 1);
			root.setChildIndex(goomy, 1);
			
			if (shadeOn == true) {
				shadeSlide.visible = true;
			}
		}
		
		function Cry()
		{
			goomy.sad.gotoAndPlay(1);
			goomy.sadEars.gotoAndPlay(1);
			goomy.sad.on('doneCrying', resume);
		}
		
		function resume()
		{
			busy = false;
		}
		
		function flashHandler()
		{
			safariBall.pokeBall.gotoAndPlay(1);
			flash = new lib.Beam();
			root.addChild(flash);
			flash.x = 135;
			flash.y = 250;
			root.setChildIndex(flash, 3);
			flash.gotoAndPlay(1);
			flash.on('caught', shrinkPokemon);
			flash.on('drop', dropBall);
		}
		
		function shrinkPokemon()
		{
			if (shadeOn == true) {
				shadeSlide.visible = false;
			}
			
			goomy.removeEventListener("click", fl_ClickToGoToAndPlayFromFrame);
			root.removeChild(goomy);
			smallGoomy = new lib.shrinkGoomy();
			root.addChild(smallGoomy);
			smallGoomy.x = 455;
			smallGoomy.y = 315;
			root.setChildIndex(smallGoomy, 2);
			smallGoomy.gotoAndPlay(1);
			smallGoomy.on('done', removeGoomy);
		}
		
		function removeGoomy()
		{
			root.removeChild(smallGoomy);
		}
		
		function dropBall()
		{
			root.removeChild(flash);
			root.removeChild(safariBall);
			fallingBall = new lib.FallingBall(); 
			root.addChild(fallingBall);
			root.setChildIndex(fallingBall, 2);
			fallingBall.gotoAndPlay(1);
			fallingBall.on('finally', message);
			fallingBall.on('finished!', endHoliday);
		}
		
		function message()
		{
			menu.Text.text = "GOOMY was caught!";
		}
		
		function endHoliday()
		{
			removeInterface();
			root.removeChild(fallingBall);
			Farewell();
		}
		
		function Farewell()
		{
			happy = new lib.holidays();
			root.addChild(happy);
			happy.holidayBtn.addEventListener("click", fl_MouseClickHandler5.bind(happy));
			happy.x = 275;
			happy.y = 125;
			//root.setChildIndex(happy, 0);
			createjs.Sound.play("greet", {delay: 500});
			help = new lib.Help();
			root.addChild(help);
			help.x = 250;
			help.y = 325;
			//root.setChildIndex(help, 0);
			root.happy.gotoAndPlay(1);
		}
		
		function removeInterface()
		{
			menu.actions.ball.removeEventListener("click", fl_MouseClickHandler1);
			menu.actions.food.removeEventListener("click", fl_MouseClickHandler2);
			menu.actions.rock.removeEventListener("click", fl_MouseClickHandler3);
			menu.actions.run.removeEventListener("click", fl_MouseClickHandler4);
			root.removeChild(pokeInfo);
			root.removeChild(ballInfo);
			root.removeChild(menu);
		}
		
		//source from online lecture!
		function DragAndDrop()
		{
			root.stop();
			dragRadius = 40; //Drag Object Size
			
			//Destination Size
			destHeight = 4;
			destWidth = 4;
			bait = new lib.pokePuff(); //Movieclip Creation
		
			//Drag Object Creation
			//Placed inside a container to hold both label and shape
			var dragger = new createjs.Container();
			dragger.x = 275;
			dragger.y = 280;
			dragger.addChild(bait);
			dragger.setBounds(200, 200, dragRadius*2, dragRadius*2);
			//DragRadius * 2 because 2*r = width of the bait
		
			var destination = new createjs.Container();
			destination.x = 550
			destination.y = 150;
			destination.setBounds(550, 150, destHeight, destWidth);
		
			//DRAG FUNCTIONALITY =====================
			dragger.on("pressmove", function(evt){
				evt.currentTarget.x = evt.stageX/1.5;
				evt.currentTarget.y = evt.stageY/1.5;
				stage.update(); //much smoother because it refreshes the screen every pixel movement instead of the FPS set on the Ticker
				if(intersect(evt.currentTarget, destination)){
					evt.currentTarget.alpha=0.2;
				}else{
					evt.currentTarget.alpha=1;
		
				}
			});
		
			//Mouse UP and SNAP====================
			dragger.on("pressup", function(evt) {
				if(intersect(evt.currentTarget, destination)){
					goomy.eating.gotoAndPlay(1);
					goomy.happyEars.gotoAndPlay(1);
					createjs.Sound.play("nom");
					resume();
					stage.removeChild(dragger, destination); //dragger.alpha = 0;
					stage.update(evt);
				}else{
					resume();
					stage.removeChild(dragger, destination);
				}
			});
			
			/*Tests if two objects are intersecting
			//Sees if obj1 passes through the first and last line of its
			//bounding box in the x and y sectors
			//Utilizes globalToLocal to get the x and y of obj1 in relation
			//to obj2
			//PRE: Must have bounds set for each object
			//Post: Returns true or false*/
			function intersect(obj1, obj2){
				var objBounds1 = obj1.getBounds().clone();
				var objBounds2 = obj2.getBounds().clone();
		
				var pt = obj1.globalToLocal(objBounds2.x, objBounds2.y);
		  
				var h1 = -(objBounds1.height / 2 + objBounds2.height);
				var h2 = objBounds2.width / 2;
				var w1 = -(objBounds1.width / 2 + objBounds2.width);
				var w2 = objBounds2.width / 2;
		
				if(pt.x > w2 || pt.x < w1) return false;
				if(pt.y > h2 || pt.y < h1) return false;
		  
				return true;
			}
		
			//Adds the object into stage
			stage.addChild(destination, dragger);
			stage.mouseMoveOutside = true;
			stage.update();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '2C3C34A8B5042243A1D58901CBE9D4FC',
	width: 550,
	height: 400,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/Safari Day_atlas_.png?1535043885322", id:"Safari Day_atlas_"},
		{src:"sounds/Geodude_1.mp3?1535043885461", id:"Geodude_1"},
		{src:"sounds/pkm.mp3?1535043885461", id:"pkm"},
		{src:"sounds/goo.mp3?1535043885461", id:"goo"},
		{src:"sounds/nom.mp3?1535043885461", id:"nom"},
		{src:"sounds/Ow.mp3?1535043885461", id:"Ow"},
		{src:"sounds/greet.mp3?1535043885461", id:"greet"},
		{src:"sounds/fc.mp3?1535043885461", id:"fc"},
		{src:"sounds/RBYCatchingAttempt2.mp3?1535043885461", id:"RBYCatchingAttempt2"},
		{src:"sounds/RBYPokeballThrow2.mp3?1535043885461", id:"RBYPokeballThrow2"},
		{src:"sounds/congrats.mp3?1535043885461", id:"congrats"},
		{src:"sounds/gta.mp3?1535043885461", id:"gta"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2C3C34A8B5042243A1D58901CBE9D4FC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;