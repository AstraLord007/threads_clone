"use client"

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { usePathname, useRouter } from "next/navigation";
import { updateUser } from "@/lib/actions/user.actions";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";


interface Props {
	user: {
		id: string;
		objectId: string;
		username: string;
		name: string;
		bio: string;
		image: string;
	};
	btnTitle: string;
}


function PostThread({ userId }: { userId: string }) {
    const router = useRouter();
  	const pathname = usePathname();
	const [files, setFiles] = useState<File[]>([]);
	const { startUpload } = useUploadThing("media");

	const form = useForm({
		resolver: zodResolver(UserValidation),
		defaultValues: {
			profile_photo: user?.image ? user.image : "",
			name: user?.name ? user.name : "",
			username: user?.username ? user.username : "",
			bio: user?.bio ? user.bio : "",
		},
	});
    return <h1>Post Thread Form</h1>
}

export default PostThread;