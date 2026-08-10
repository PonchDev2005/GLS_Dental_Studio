import data from "../data";
import { NotFound } from "../components/NotFound";

export function NotFoundPage() {
    const notFound = data.notFoundImage;

    return (
        <div className="NotFound">
            <NotFound notFound={notFound} />
        </div>
    )
}
