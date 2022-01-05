import { useState, useEffect } from 'react'
import { bitcoinService } from "../services/bitcoinService.js"
import { Chart } from '../cmps/Chart'


export const StatisticPage = () => {
    const [marketPrice, setMarketPrice] = useState(null)
    const [confirmedTransactions, setConfirmedTransactions] = useState(null)
    useEffect(() => {
        loadChartsData()
    }, [])

    const loadChartsData = async () => {
        const marketPrice = await bitcoinService.getMarketPrice()
        const confirmedTransactions = await bitcoinService.getConfirmedTransactions()
        setMarketPrice(marketPrice)
        setConfirmedTransactions(confirmedTransactions)
    }

    return (
        <div>
            {marketPrice && <Chart
                chartData={marketPrice}
                color="blue">
            </Chart>
            }
            {confirmedTransactions && <Chart
                chartData={confirmedTransactions}
                color="green">
            </Chart>
            }
        </div >
    )
}
