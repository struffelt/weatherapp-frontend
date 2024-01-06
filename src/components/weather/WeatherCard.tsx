import styles from "./WeatherCard.module.css";
import temperatureIcon from "./../../assets/thermometer.png";
import windIcon from "./../../assets/wind.png";
import { useEffect, useState } from "react";
import { fetchData } from "../../API/apiService";

export interface WeatherCardProps {
    city: string
}

const WeatherCard: React.FC<WeatherCardProps> = ({city}: WeatherCardProps) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
        try {
            const result = await fetchData(city);
            setData(result);
        } catch (error : any) {
            setError(error.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
        };
        
        fetchDataAsync();
    }, []);

    if (loading) {
        return <div className={styles.container}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.container}>{error}</div>;
    }

    if (!data) {
        return <div className={styles.container}>No data available</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.location}>
                <p
                    className={`${styles.paragraph} ${styles.city}`}
                >{data.location.name}</p>
                <p
                    className={`${styles.paragraph} ${styles.country}`}
                >{data.location.country}</p>
            </div>

            <img 
                src={"https:" + data.current.condition.icon} 
                className={styles.weatherIcon}
            />

            <div className={styles.temperature}>
                <img 
                    src={temperatureIcon}
                    className={styles.temperatureIcon}
                />
                <p
                    className={`${styles.paragraph} ${styles.temperatureText}`}    
                >{data.current.temp_c} °C</p>
            </div>

            <div className={styles.wind}>
                <img 
                    src={windIcon}
                    className={styles.windIcon}
                />
                <p
                    className={`${styles.paragraph} ${styles.wind}`}
                >{data.current.wind_kph} km/h</p>
            </div>
        </div>
    )
}

export default WeatherCard;