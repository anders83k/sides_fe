import { SidesDTO } from "../types/sides";

const SidesCard = ({dish, components}: SidesDTO) => {
    const imagePath = `/images/${dish.toLowerCase()}.jpg`;
    return (
        <div className="card h-56 w-full bg-gray-200 overflow-hidden">
            <img 
            src={imagePath} 
            alt={`Bild på ${dish}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
       

        <div className="p-6">
        <div className="flex justify-between items-center mb-2">
           <h3 className="text-xl font-bold text-gray-800">{dish}</h3>
        </div>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-3">
          {components}
        </p>
        </div>

    

   
  );
};

export default SidesCard;