import React from 'react'

class Bank extends React.Component{
    constructor(){
        super();
        this.state = {
            nominal: null,
            bunga: null,
            periode: null,
            hitung: null
        }
    }
    hitung = (e) => {
        e.preventDefault();
        const nominal = parseInt(this.refs.nominal.value);
        const bunga = parseInt(this.refs.bunga.value)/100;
        const periode = parseInt(this.refs.periode.value);
        let hitung;
        

        hitung = ((nominal*bunga)+(nominal))/(periode);
        console.log(hitung);

        this.setState({
            nominal, bunga, periode, hitung
        });
    }
    
    render(){
        return(
            <div className="container">
                <div class="alert alert-danger" role="alert">
                    <h2>Cicilan Bank React</h2>
                </div>
                <form onSubmit={this.hitung}>
                <label>Nominal:</label>
                <input type="number" ref="nominal" className="form-control"></input>
                <br/>
                <label>Bunga:</label>
                <input type="number" ref="bunga" className="form-control"></input>
                <br/>
                <label>Periode:</label>
                <input type="number" ref="periode" className="form-control"></input>
                <br/>
                <button className="form-control btn btn-danger text-white" onClick={this.hitung}>Submit</button>
            </form>
            <div class="row">
            <div class="col-sm-12">
                <div class="card">
                <div class="card-body">
                <h5 class="card-title">Pembayaran Per Bulan</h5>
                <h2 class="card-text">{this.state.hitung}</h2>
                <h5 class="card-title">BANK REACT</h5>
             </div>
             </div>
             </div>
             </div>  
            </div>
        )
    }
}
export default Bank;