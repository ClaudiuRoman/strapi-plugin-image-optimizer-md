declare const configSchema: import("yup").ObjectSchema<{
    additionalResolutions: number[];
    exclude: {}[];
    formats: {}[];
    include: {}[];
    sizes: {
        width?: number;
        height?: number;
        name?: string;
        fit?: {};
        position?: {};
        withoutEnlargement?: boolean;
    }[];
    quality: number;
}, import("yup").AnyObject, {
    additionalResolutions: "";
    exclude: "";
    formats: "";
    include: "";
    sizes: "";
    quality: undefined;
}, "">;
export default configSchema;
