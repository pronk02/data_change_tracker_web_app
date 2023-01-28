import { useLoaderData } from "@remix-run/react";
import { type LoaderFunction } from "@remix-run/node";

const loader:LoaderFunction = async() => {

}

export default function Index() {
    return (
        <div>
            <p>Test</p>
        </div>
    );
}
