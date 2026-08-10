import data from "../data";
import { ContactPageInfo } from "../components/ContactPageInfo";

export function ContactPage() {
    const contactContent = data.contactpage;

    return (
        <div>
            <ContactPageInfo contactContent={contactContent} />
        </div>
    );
}
