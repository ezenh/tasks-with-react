import React from "react";

export function useLocalStorage(itemName, initialValue) {
    // console.log(localStorage)
    const [items, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    
    React.useEffect(() => {
        setTimeout(() => { // SIMULAR DEMORA EN CARGA DE CONTENIDO
        try {
            const localStorageItems = localStorage.getItem(itemName)
            let parsedItems

            if(!localStorageItems) {
                localStorage.setItem(itemName, JSON.stringify(initialValue))
                parsedItems = initialValue
            } else {
                parsedItems = JSON.parse(localStorageItems)
                setItem(parsedItems)
            }
            setLoading(false) 
        } catch (error) {
            setLoading(false) 
            setError(true)
        }
        },1000)
    }, [])

                
    // console.log(localStorage)
        
    const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
    }

    // console.log(items)

    return {items, saveItem, loading, error}
}
