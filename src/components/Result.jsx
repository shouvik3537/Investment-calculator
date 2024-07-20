import {calculateInvestmentResults, formatter} from "../util/Investment"
export default function Result({input}){
    const resultData = calculateInvestmentResults(input);
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total INterest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultData.map(yearData => {
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndofYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                })}
            </tbody>

        </table>
       
    );
}