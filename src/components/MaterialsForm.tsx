import Button from "./Button"
import { redirect } from 'next/navigation'

const MaterialsForm: React.FC = () =>{
    
    async function create(formData: FormData) {
        'use server'
     
        const data: any = {}
        
        for (const [key, value] of formData) {
            data[key] = value
        }

        try{
            await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/materials/form`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({...data}),
                next: { revalidate: false },
                cache: "no-store"
              });

              redirect("/")
              
        } catch(error: any){
            console.log(error)
        }
      }

    return(
        <form action={create} className="flex flex-col gap-4 mt-12 m-auto w-fit"> 
            <h3 className="text-xl font-extrabold sm:text-2xl"> Materiał dostępny po wypełnieniu prostej ankiety poniżej.</h3>
            <input name="name" className="text-base sm:text-lg w-fit min-w-0 sm:min-w-[400px] rounded-full border-2 py-2 px-4" required placeholder="nazwa parafii i miasto (diecezja)" type="text"/>
            <input name="count" className="text-base sm:text-lg w-fit min-w-0 sm:min-w-[400px] rounded-full border-2 py-2 px-4" required placeholder="jaki zasięg użycia materiału? (+/- Ilość sztuk)" type="text"/>
            <input name="email" className="text-base sm:text-lg w-fit min-w-0 sm:min-w-[400px] rounded-full border-2 py-2 px-4" required placeholder="adres mailowy" type="email"/>
           <div className="w-full mt-4">
                <Button type="submit" text="wyślij"></Button>
           </div>
        </form>
    )
}

export default MaterialsForm