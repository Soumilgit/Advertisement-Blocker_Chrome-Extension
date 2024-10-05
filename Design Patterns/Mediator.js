


function Member(name)
{
  this.name = name
  this.chatroom = null
}

Member.prototype = {
  send: function(message, toMember)
  {
    this.chatroom.send(message, this, toMember)
  },
  receive: function(message, fromMember)
  {
    console.log(`${fromMember.name} to ${this.name}: ${message}`)
  }
}

function Chatroom()
{
  this.members = {}
}

Chatroom.prototype = {
  addMember: function(member)
  {
    this.members[member.name] = member
    member.chatroom = this
  },
  send: function(message, fromMember, toMember)
  {
    toMember.receive(message, fromMember)
  }
}

const chat = new Chatroom()

const soumyadip = new Member("Soumyadip")
const sam = new Member("Sam")
const tim = new Member("Tim")

chat.addMember(soumyadip)
chat.addMember(sam)
chat.addMember(tim)

soumyadip.send("Hey, Sam", sam)
sam.send("What's up, Soumyadip", soumyadip)
tim.send("Sam, are you ok?", sam)
