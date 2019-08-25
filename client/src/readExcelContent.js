import React from 'react'
import readXlsxFile from 'read-excel-file'

class ReadExcelContents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            serialNo : "",
            resources : "",
            foodChoice : "",
            transport : "",
            excelFetched : []
        }
       
        this.readExcel = this.readExcel.bind(this);
        this.renderTableFromExcel = this.renderTableFromExcel.bind(this);
    }

    readExcel(){
        const input = document.getElementById('input');
          readXlsxFile(input.files[0]).then((rows) => {
                this.setState({excelFetched:rows})
          })
       
    }

    renderTableFromExcel(){
        
       
        if(this.state.excelFetched && this.state.excelFetched.length>0){
        var tableData = this.state.excelFetched;
       return tableData.map((rowData) => {
            return (
                <tr>
                    <td>{rowData[0]}</td>
                    <td>{rowData[1]}</td>
                    <td>{rowData[2]}</td>
                    <td>{rowData[3]}</td>
                </tr>
            )
        })
    }

    }

render(){

    
    return(
        <div>
        <input type="file" id="input" onChange={this.readExcel}/>
        <div>
            <table>
                <thead>
                <tr>
                    
                    </tr>
                    </thead>
                    <tbody>

            {
                this.renderTableFromExcel()
            }
            </tbody>
            </table>
        </div>
        </div>
    )
}

}

export default ReadExcelContents