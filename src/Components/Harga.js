import React from 'react'

class Harga extends React.Component{
    constructor(){
        super();
        this.state = {
            awal: null,
            ppn: null,
            diskon: null,
            hitung: null
        }
    }
    hitung = (e) => {
        e.preventDefault();
        const awal = parseInt(this.refs.awal.value);
        const ppn = parseInt(this.refs.ppn.value)/100;
        const diskon = parseInt(this.refs.diskon.value)/100;
        let hitung;
        

        hitung = (awal*ppn)+(awal)-(awal*diskon);
        console.log(hitung);

        this.setState({
            awal, ppn, diskon, hitung
        });
    }
    
    render(){
        return(
            <div className="container">
                <div class="alert alert-warning" role="alert">
                    <h2>Hitung Harga Akhir</h2>
                </div>
                <form onSubmit={this.hitung}>
                <label>Harga Awal:</label>
                <input type="number" ref="awal" className="form-control"></input>
                <br/>
                <label>PPN:</label>
                <input type="number" ref="ppn" className="form-control"></input>
                <br/>
                <label>Diskon:</label>
                <input type="number" ref="diskon" className="form-control"></input>
                <br/>
                <button className="form-control btn btn-warning text-white" onClick={this.hitung}>Submit</button>
            </form>
            <div class="row">
            <div class="col-sm-12">
                <div class="card">
                <div class="card-body">
                <h5 class="card-title">Total Harga Akhir</h5>
                <h2 class="card-text">{this.state.hitung}</h2>
                <h5 class="card-title">Terima Kasih</h5>
             </div>
             </div>
             </div>
             </div>  
            </div>
        )
    }
}
export default Harga;