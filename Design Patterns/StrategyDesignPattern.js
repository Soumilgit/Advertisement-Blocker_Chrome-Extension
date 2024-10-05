
function Fedex(pkg)
{
  this.calculate = () =>
  {
   
    return 2.45
  }
}

function UPS(pkg)
{
  this.calculate = () =>
  {
  
    return 1.56
  }
}

function USPS(pkg)
{
  this.calculate = () =>
  {
    
    return 4.5
  }
}

function Shipping()
{
  this.company = ''
  this.setStrategy = company =>
  {
    this.company = company
  }
  this.calculate = pkg => {
    return this.company.calculate(pkg)
  }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const shipping = new Shipping()
const pkg = { from: "Maharashtra", to: "MadhyaP", weight: 1.56 } // It's a dummy package

shipping.setStrategy(fedex)
console.log("Fedex: " + shipping.calculate(pkg))

shipping.setStrategy(ups)
console.log("UPS: " + shipping.calculate(pkg))

shipping.setStrategy(usps)
console.log("USPS: " + shipping.calculate(pkg))
