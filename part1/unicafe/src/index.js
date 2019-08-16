import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = () =>(
    <div>
        <h1>Unicafe</h1>
        <h2>Give Feedback</h2>
    </div>
)

const Button = ({title, Func}) => (
    <button onClick={Func}>
        {title}
    </button>
)

const Statistic = (props) => (
    <tr>
        <td>{props.text} </td>
        <td>{props.value}</td>
    </tr>
)

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad
    const average = (props.good - props.bad) / all
    const percentage = (props.good / all) * 100
    if(all === 0){
        return (
            <div>
                <h2>Statistics</h2>
                <p>No Feedback Given</p>
            </div>
        )
    }
    return (
        <div>
            <h2>Statistics</h2>
            <table>
                <Statistic text="Good" value={props.good} />
                <Statistic text="Neutral" value={props.neutral} />
                <Statistic text="Bad" value={props.bad} />
                <tr>
                    <td>All</td>
                    <td>{all}</td>
                </tr>
                <tr>
                    <td>Average</td>
                    <td>{average}</td>
                </tr>
                <tr>
                    <td>Percentage</td>
                    <td>{percentage} %</td>
                </tr>
            </table>
            
        </div>
    )
    
}

const App = (props) =>  {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

   

    return (
        <div>
            <Header />
            <Button title="Good" Func={() => setGood(good + 1)}/>
            <Button title="Neutral" Func={() => setNeutral(neutral + 1)}/>
            <Button title="Bad" Func={() => setBad(bad + 1)}/>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

