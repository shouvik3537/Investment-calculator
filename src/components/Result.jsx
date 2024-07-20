import {calculateInvestmentResults, formatter} from "../util/Investment"
export default function Result({input}){
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
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
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(initialInvestment)}</td>
                        
                    </tr>
                })}
            </tbody>

        </table>
       
    );
}