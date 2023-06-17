import { CategoryList } from "components/Categories/CategoryList/CategoryList";
import { Section, Button } from "./CategoriesPage.style";

const CategoriesPage = () => {

    return (
        <Section>
            <Button button="button">Add category</Button>
            <CategoryList/>
            </Section>
    )
}

export default CategoriesPage;