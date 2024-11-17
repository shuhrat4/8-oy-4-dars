import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../hook/useAxios";
import { SetStateAction, useEffect, useState } from "react";

interface CategoryType {
    id: string | number;
    name: string;
    isActive: boolean;
}

interface CategoryStateType {
    setCategoryId: React.Dispatch<SetStateAction<string | number>>;
}

const HomeCategory = ({ setCategoryId }: CategoryStateType) => {
    const axios = useAxios();

    const { data = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: () => axios.get("/categoria").then((res) => res.data),
    });

    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        if (data.length) setCategories(data);
    }, [data]);

    function hadleCategoryBtnClik(item: CategoryType): void {
        setCategoryId(item.id);
        const updatedCategories = categories.map((obj: CategoryType) => ({
            ...obj,
            isActive: obj.id === item.id ? !obj.isActive : false,
        }));
        setCategories(updatedCategories);
    }

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-[10px]">
                {categories.map((item: CategoryType) => (
                    <button
                        onClick={() => hadleCategoryBtnClik(item)}
                        className={`py-[13px] ${item.isActive ? "bg-[#282828] text-white" : "bg-[#F9F9F9]"
                            } rounded-[30px] px-[20px]`}
                        key={item.id}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <p>Сортировка по: популярности</p>
        </div>
    );
};

export default HomeCategory;
