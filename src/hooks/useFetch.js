import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export function useFetch(url){
    const arrayData = ref([]);
    
    onMounted(async() => {
        try{
            const resp = await fetch(url)
            arrayData.value = await resp.json();
        } catch(e){
            console.log(e);
        }
    })
    // const fetchData = async() => {
    //     try{
    //         const resp = await fetch('https://restcountries.eu/rest/v2/all')
    //         arrayData.value = await resp.json();
    //     } catch(e){
    //         console.log(e);
    //     }
    // }

    // fetchData(); //Para no usar el onMounted

    return { arrayData }
}
