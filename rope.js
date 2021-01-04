class Rope{
    constructor(bodyDeb,bodyShambhavi, offsetX, offsetY){
       this.offsetX = offsetX
       this.offsetY = offsetY
        var chain_options = {
            bodyA: bodyDeb,
            bodyB: bodyShambhavi,
           pointB:{x:this.offsetX, y:this.offsetY}
        }
this.chain = Constraint.create(chain_options)
World.add(world,this.chain)
    }
display(){
    var pos1 = this.chain.bodyA.position.x
    var pos2 = this.chain.bodyA.position.y
    var pos3 = this.chain.bodyB.position.x + this.offsetX
    var pos4 = this.chain.bodyB.position.y + this.offsetY
    line(pos1,pos2,pos3,pos4)
}
}